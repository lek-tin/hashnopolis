---
title: "Conditional Render in React"
description: "Some description ..."
authors: ["lek-tin"]
tags: ["frontend", "javascript", "react", "reconciliation-key"]
categories: ["javascript"]
date: 2018-08-28T23:31:12+08:00
draft: false
archive: false
---
In react, sometimes we need to render a component based on some `flag`, for example, we need to display a different set of information to the admin users than the normal users. We have a `prop` called `isAdmin`
```javascript
render () {
  const { isAdmin } = this.props
  return (
    <div>
      { isAdmin
        ? <CustomeComponent {...propSetA} / >
        : <CustomeComponent {...propSetB} / >
      }
    </div>
  )
}
```
Looks good right, but there is one problem.