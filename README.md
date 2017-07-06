# todos
Building React Applications with Idiomatic Redux

Following Redux Course

VIDEO: https://egghead.io/courses/building-react-applications-with-idiomatic-redux
NOTES: https://github.com/tayiorbeii/egghead.io_idiomatic_redux_course_notes

Own notes/comments will be included. Completed first of Dan's courses introducing Redux, and Stephen Grider's Udemy course. 

Thoughts so far:
  Dan's course was hard to follow, still not sure why the todo reducers were pulled out from the todos. Most of the course was
  done in a single page which made it a little hard to organize in my head. Grider's course helped with the broad understanding 
  how to set things up. 
  Static Typing! PropTypes is used in but I can't help but think that Flow would be a better pick.
  Containers vs components: when to use one of the other?
  Pass by props to child vs via Redux? Is there a time to use the traditional way to pass down to a child? Sometimes it seems like it would be 
  easier.
  Main Issue: Using ajax calls with promises, callbacks, thunk. Does thunk replace the need of the ReduxPromise?
  When changing to Thunk to determine if the data is being fetched, the data is fetched but when it needs to be used, I'm getting
  'undefined'. I think this is because the middle is not making the promise wait for the data but with console logs I seem to be getting
  the correct data and format.
  
  Thunk: Simply put it uses a anonymous function with no agruments to wrap around a function that is only called with needed.
  
  Currying: converting functions into many functions
