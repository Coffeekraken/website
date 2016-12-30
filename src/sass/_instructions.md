# CSS

This folder will store all the sass/scss files that are specific to the project.
Here's some rules to follow in order to all work the same way across projects.

1. Keep the following files structure :
	- |--- **```00_vendors```**
	- |------- ```_all.scss```
	- |--- **```01_setup```**
	- |------- ```_all.scss```
	- |--- **```02_utils```**
	- |------- ```_all.scss```
	- |--- **```03_generic```**
	- |------- ```_all.scss```
	- |--- **```04_layout```**
	- |------- ```_all.scss```
	- |--- **```05_pages```**
	- |------- ```_all.scss```
	- |--- **```06_blocks```**
	- |------- ```_all.scss```
	- |--- **```07_objects```**
	- |------- ```_all.scss```
	- |--- **```08_trumps```**
	- |------- ```_all.scss```
	- |--- ```style.scss```
2. Each subfolder has to have an ```_all.scss``` file that import all his files
3. Stick to a **known CSS naming convention** like:
	- [BEM](http://getbem.com/introduction/) (prefered choice)
	- [SMACCS](https://smacss.com/)
	- Other choices... (has to be discussed with others before making crap on your own...)
4. 1 file = 1 purpose
	- Split your codebase into multiple files that are **each responsible for one thing** (navs, lists, etc...)
5. Nest selectors only when needed

Don't do:

```scss
.my-block {
	// code here...
	.my-block__title {
		// code here...
	}
}
```

But instead

```scss
.my-block {
	// code here...
}
.my-block__title {
	// code here...
}
```

Meaningful nesting

```scss
.my-block {
	// code here...
}
.my-block__title {
	// code here...
}
.my-block--modified {
	// code here...
	.my-block__title {
		// update title code here...
	}
}
```
