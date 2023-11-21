# React Window

React window works by only rendering part of a large data set (just enough to fill the viewport). This helps address some common performance bottlenecks:

* It reduces the amount of work (and time) required to render the initial view and to process updates.
* It reduces the memory footprint by avoiding over-allocation of DOM nodes.

Links to detailed package information:

* [Project Repository](https://github.com/bvaughn/react-window)
* [Examples](https://react-window.vercel.app/#/examples/list/fixed-size)