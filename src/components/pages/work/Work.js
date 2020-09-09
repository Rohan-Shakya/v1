import React from 'react';
import './Work.css';
import { WorkItem } from './WorkItem';

export const Work = () => {
  return (
    <>
      <div className='work animate__animated animate__pulse delay-025s'>
        <div className='work-container'>
          <h1 className='animate__animated animate__fadeInDown'>
            What I've done
          </h1>
          <p>(more to come)</p>
          <div className='works animate__animated animate__fadeInUp'>
            <WorkItem
              src='/projects/github-finder.jpg'
              desc='Github Profile Finder'
              code='https://github.com/Rohan-Shakya/github-profile-finder'
              demo='https://github-profile-finder-app.netlify.app/'
            />
            <WorkItem
              src='/projects/lyrics.jpg'
              desc='Lyrics Finder'
              code='https://github.com/Rohan-Shakya/lyrics-finder'
            />
            <WorkItem
              src='/projects/netflix.jpg'
              desc='Netflix Clone'
              code='https://github.com/Rohan-Shakya/Netflix-Landing-Page-Clone'
              demo='https://rohan-shakya.github.io/Netflix-Landing-Page-Clone/'
            />
            <WorkItem
              src='/projects/drawing-app.png'
              desc='Drawing App'
              code='https://github.com/Rohan-Shakya/25-Vanilla-Javascript-Projects/tree/master/18.%20Drawing%20App'
              demo='https://vanilla-js-drawing-app.netlify.app/'
            />
            <WorkItem
              src='/projects/corona-tracker.jpg'
              desc='Corona Tracker'
              code='https://github.com/Rohan-Shakya/Corona-Tracking-App'
              demo='https://corona-tracking-app.netlify.app/'
            />
            <WorkItem
              src='/projects/repice.jpg'
              desc='Repice Finder'
              code='https://github.com/Rohan-Shakya/Recipe-App-React'
            />
            <WorkItem
              src='/projects/currency-converter.png'
              desc='Currency Converter'
              code='https://github.com/Rohan-Shakya/25-Vanilla-Javascript-Projects/tree/master/22.%20Currency%20Converter'
            />
            <WorkItem
              src='/projects/weather-app.png'
              desc='Weather App'
              code='https://github.com/Rohan-Shakya/25-Vanilla-Javascript-Projects/tree/master/20.%20Weather%20App'
            />
            <WorkItem
              src='/projects/tic-tac-toe.jpg'
              desc='Tic Tac Toe'
              demo='https://tic-tac-toe-vanilla-js.netlify.app/'
            />

            <WorkItem
              src='/projects/todo.jpg'
              desc='Todo List'
              code='https://github.com/Rohan-Shakya/todolist'
              demo='https://todolist-node-express-mongodb.herokuapp.com/todo'
            />
            <WorkItem
              src='/projects/dailymart.jpg'
              desc='Daily Mart'
              demo='https://dailymart.netlify.app/'
            />
            <WorkItem src='/projects/markdown.jpg' desc='Markdown Previewer' />
          </div>
        </div>
      </div>
    </>
  );
};
