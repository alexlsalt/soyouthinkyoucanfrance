import React from "react";
import {
  Link,
  Route,
  Switch,
  useRouteMatch,
  useParams,
} from "react-router-dom";

export function Posts() {
  let match = useRouteMatch();

  return (
    <div>
      <div className="blog-posts">
        <ul>
          <li>
            <Link to={`${match.url}/major-differences-schools`}>
              10 Major Differences Between French & American High Schools
            </Link>
          </li>
          <li>30 Reasons to Love Teaching English in France</li>
          <li>Assistant Spotlight with Reuben Ramsay</li>
          <li>
            30 Things to Do with All Your Free Time as a Teaching Assistant in
            France
          </li>
          <li>Assistant Spotlight with Charity Watson</li>
          <li>Getting Back to France After Studying Abroad</li>
          <li>
            WTF OFII: The Complete Guide to Your Immigration Appointment in
            France
          </li>
          <li>Assistant Spotlight with Amber Sweat</li>
          <li>
            Not All Sunshine + Wine: Feeling Depressed During Your TAPIF Year
          </li>
          <li>Assistant Spotlight with Anne Donnelly</li>
          <li>TAPIF: How to Cut the Cost of Your Commute in Half</li>
          <li>TAPIF Thanksgiving: How to Celebrate in France</li>
          <li>4 Ways to Supplement Your TAPIF Income</li>

          <li>Making French Friends: 6 Ways to Speak More French</li>
          <li>
            Turning in Documents to Your School's Secretariat as a Renewing
            Assistant
          </li>
          <li>Teaching in a Primary School: Lessons + Planning - Part 2</li>
          <li>Teaching in a Primary School: What to Expect - Part 1</li>
          <li>
            5 Ways to Drastically Improve Your French as a TAPIF Assistant
          </li>
        </ul>

        <ul>
          <li>
            Your French Immigration Appointment: How to Avoid Crying (Like I
            Did)
          </li>
          <li>
            TAPIF Q+A: In the Classroom, Banking, Accommodation in France + So
            Much More!!
          </li>
          <li>
            Webinar Recap: What It's ACTUALLY Like in the French Classroom
          </li>
          <li>Say Au Revoir to the Need to Control Everything</li>
          <li>Assistant Spotlight with Katie Wade</li>
          <li>7 Reasons Why I Freaking LOVE Living in France</li>
          <li>TAPIF: Should You Rent an Apartment or Live at School?</li>
          <li>TAPIF Year Abroad: What to Pack & What to Leave Behind</li>
          <li>TAPIF Travels: Voyager à Nantes</li>
          <li>How I'm Saving More Money Than EVER With TAPIF</li>
          <li>Assistant Spotlight with Pavel</li>
          <li>TAPIF Problem: Too Much Time Between Classes</li>
          <li>Classroom Activities: Story Cubes</li>
          <li>TAPIF: Should You Choose Primary or Secondary School?</li>
          <li>So You've Been Accepted to TAPIF ... Now What?</li>
        </ul>
      </div>

      <Switch>
        <Route path={`${match.path}/:postId`}>
          <Post />
        </Route>
        <Route path={match.path}>
          <h3>Please select a post</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Post() {
  // let { postId } = useParams();

  // const selectedPost = posts.filter(post => post.id === postId);)

  return (
    <div className='blog-post-container'>
      <h3>Stay tuned!</h3>
      <p>Post content coming soon!</p>
    </div>
  );
} 

// const posts = [
//   {
//     id: "major-differences-schools",
//     title: "10 Major Differences Between French & American High Schools",
//     content:
//       "The French high school experience is crazily different from the American high school experience. Generally speaking, French high schools mean business when it comes to how they expect their students to behave - aka long school days, no extracurriculars, no school spirit, etc. Read on to see some of my observations!French students have hyper-long school days. (French School) When a teacher is absent, class is cancelled.(French School) No (or very limited) extracurricular activities. (French School) Sports are not a thing. (French School) Dances are not a thing. (French School) School spirit - you guessed it: not a thing.French High School is 3 years instead of 4.French students choose a major in high school.French grades are given out of 20 points.  Notes home to parents in French students’ notebooks",
//   },
//   {
//     path: "/things-love-about-france",
//     title: "What I Love About Teaching English in France",
//     content:
//       "<div><p>Pretend this is different!</p><ol><li>French students have hyper-long school days.</li><li>(French School) When a teacher is absent, class is cancelled. </li><li>(French School) No (or very limited) extracurricular activities.</li><li>(French School) Sports are not a thing.</li><li>(French School) Dances are not a thing.</li><li>(French School) School spirit - you guessed it: not a thing.</li><li>French High School is 3 years instead of 4.</li><li>French students choose a major in high school.</li><li>French grades are given out of 20 points. </li><li> Notes home to parents in French students’ notebooks</li></ol></div>",
//   },
// ];
