# Implement the class below, keeping the constructor's signature unchanged; it should take no arguments.
import json
class MarkingPositionMonitor:
    def __init__(self):
        self.orders = {}
        self.map = {}
        pass
    
    def on_event(self, message):
        msg = json.loads(message)
        if msg is not None:
            time = msg["time"]
            orderType = msg["type"]
            order_id = msg["order_id"]
            if orderType == "NEW":
                symbol = msg["symbol"]
                side = msg["side"]
                quantity = int(msg["quantity"])
                self.orders[order_id] = {}
                self.orders[order_id]["side"] = side
                self.orders[order_id]["time"] = time
                self.orders[order_id]["symbol"] = symbol
                self.orders[order_id]["quantity"] = quantity
                self.orders[order_id]["isCancelling"] = False
                if msg["symbol"] in self.map:
                    if side == "SELL":
                        self.map[symbol]["quantity"] -= quantity
                else:
                    self.map[symbol] = {}
                    if side == "SELL":
                        self.map[symbol]["quantity"] = -quantity
                    elif side == "BUY":
                        self.map[symbol]["quantity"] = 0
                return self.map[symbol]["quantity"]
            else:
                symbol = self.orders[order_id]["symbol"]
                if orderType == "CANCEL":
                    if order_id in self.orders:
                        self.orders[order_id]["isCancelling"] = True
                elif orderType == "CANCEL_ACK":
                    if order_id in self.orders:
                        self.orders[order_id]["isCancelling"] = False
                        if self.orders[order_id]["side"] == "SELL":
                            self.map[symbol]["quantity"] += self.orders[order_id]["quantity"]
                        elif self.orders[order_id]["side"] == "BUY":
                            self.map[symbol]["quantity"] -= self.orders[order_id]["quantity"]
                elif orderType == "CANCEL_REJECT":
                    if order_id in self.orders:
                        self.orders[order_id]["isCancelling"] = False
                elif orderType == "FILL":
                    filled_quantity = msg["filled_quantity"]
                    if order_id in self.orders:
                        if self.orders[order_id]["side"] == "BUY":
                            self.map[symbol]["quantity"] += filled_quantity
                        self.orders[order_id]["quantity"] -= filled_quantity
                elif orderType == "ORDER_REJECT":
                    if order_id in self.orders:
                        if self.orders[order_id]["side"] == "SELL":
                            self.map[symbol]["quantity"] += self.orders[order_id]["quantity"]
                        del self.orders[order_id]
                return self.map[symbol]["quantity"]
            
        pass