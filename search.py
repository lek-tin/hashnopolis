nums = [1,3]
target = 3
def searchInsertPos(nums, target):
  startPos, endPos = 0, len(nums) - 1

  if target > nums[endPos]:
    return len(nums)

  if target < nums[0]:
    return 0

  while True:
    midPos = (startPos + endPos) // 2
    if nums[midPos] == target:
      return midPos
    if nums[startPos] < target and nums[endPos] >target and (startPos + 1) == endPos:
      return startPos + 1
    if nums[midPos] < target:
      startPos = midPos
    if nums[midPos] > target:
      endPos = midPos

print(searchInsertPos(nums, target))
