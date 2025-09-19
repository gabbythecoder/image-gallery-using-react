# Build an Accessible Gallery using React

Week 6 assignment - Build an Accessible Gallery using React

Created an Image Gallery using React as part of the Tech Educators course.

## Requirements
- 🎯 Implement the useState hook to manage gallery state (e.g. selected image). ✅
- 🎯 Use useEffect for initial fetching of images from an external API. ✅
- 🎯 Return JSX from multiple components (e.g., an ImageItem component for each image and a Gallery component to display them). ✅
- 🎯 Use the .map() function to render an array of images dynamically ✅
- 🎯 Implement functionality to display a larger version of an image when its thumbnail is clicked. ✅
- 🎯 Ensure all images have meaningful alt text. ✅
- 🎯 Ensure basic keyboard navigation for image selection (e.g., thumbnails should be focusable and activatable with Enter/Space). ✅

## Stretch Requirements
- 🏹 Use useEffect and the dependancy array to update the images when the user types in an input field. ✅
- 🏹 Set up an Unsplash application that you can fetch from your React app. ✅
- 🏹 Use .env to hide your API keys and tokens from the code. ✅
- 🏹 Style the application excellently, using grid or flex and positioning. ✅

## Reflection

For this assignment, we were tasked to build an accessible image gallery using React. It is similar to our week 2 assignment, but using React. While I am getting the hang There were some difficulty with this assignment, especially when it came to adding responsive design. 

I have managed to implement all the requirements as well as the stretch requirements. Before I used the Unsplash API, I tested my fetch request with the API that we were given during the assignment brief. After I was happy that everything was working as intended, I created an account with Unsplash and used their API, after reading the recommended documentation. 

With the Unsplash API, when reading the documentation, they provided a link to use to fetch the data but when I rendered the images to the page, it was displaying random images. As I wanted to implement the search bar for users to type in a specific query, I had to figure out what the correct endpoint was - /search/photos. After I tested this to make sure everything was working smoothly, I created the search bar. With this, in the ```useEffects()``` dependency array, I added ```[query]``` as this is a dynamic behaviour -> the search bar updates query when a user types something and submits it. With the search bar, the user can submit their input by pressing enter. YouTube tutorial and React documentation helped me achieve this which I have included in my resources. 

For basic keyboard navigation, with React, the Enter/Space is the default behaviour. I wrapped the thumbnail images as buttons to achieve this. For accessibility purposes, I added an outline on the thumbnail on ```:focus``` for better user experience. This way, the user is aware which photo they are currently on in the thumbnail. I added ```tabIndex="0"```attribute in my ThumbnailImages.jsx file for my thumbnail-container. Side buttons were also included for the large images. Arrow-left and arrow-right can also be used to navigate between the large images. Colour contrast checker was used to make sure the colour palette I used had good contrast ratio. 

One thing that I found difficult is having different components. Before using React, we usually had an index.html file, style.css file and app.js file. But now, I have a number of different files for each component and had difficulty keeping track of everything.

With having different files for each component, I encountered an issue with styling. When I was trying to add responsive design, for some reason, whenever I decrease the size of the page using Chrome DevTools, the entire body of the webpage shrunk. I had to go through each component css files to see why this is happening. It turns out that in my LargeImage.css file, I used a fixed max-width size, which in turn caused the entire webpage to have the same max-width. To fix this, I had to rewrite my styling for LargeImage.css and double checked all my other css files to make sure there was nothing else that could cause any further issues when adding responsive design styling. To be honest, this was a very tedious and frustrating process to debug, but I am now glad it is all fixed. 

Overall, this assignment had its fair shares of ups and downs. Learning React and having to implement JSX, useState() and useEffect() is still a learning process for me. I know it will take some time to get used to using React, especially with having different files for each component. This assignment was a learning experience for me, especially when it came to something as simple as the styling. With that said, I am happy with how everything turned out. 

Any feedback will be appreciated as I am always looking for ways to continuously improve.

## Resources 
- https://react.dev/learn/thinking-in-react#step-3-find-the-minimal-but-complete-representation-of-ui-state
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex
- https://react.dev/reference/react/useEffect
- https://react.dev/reference/react/useEffect#connecting-to-an-external-system
- https://unsplash.com/documentation#schema
- https://www.youtube.com/watch?v=BJCFiGiUAeg 