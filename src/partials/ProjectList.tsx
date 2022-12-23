import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Project 1 : Museum Database Management System"
        description="A Fully Functional Database Management System with Python and MySQL, which allows user to access with different roles and find the relevant museum data. It was our final project in ENSF300 course."
        link="/"
        img={{
          src: '/assets/images/museum.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Python</Tags>
            <Tags color={ColorTags.LIME}>Relational DBMS</Tags>
            <Tags color={ColorTags.SKY}>MySQL</Tags>
          </>
        }
      />
      <Project
        name="Project 2: DEVELOPING A MACHINE LEARNING MODEL"
        description="During our ENDG319 courseworks, we learnt data plotting and in depth of data science with python libraries, as well as developing our own machine learning model using scipy."
        link="https://github.com/lilacchio/Data-science-and-ML-jupyter"
        img={{ src: '/assets/images/coding.png', alt: 'ML' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Python</Tags>
            <Tags color={ColorTags.EMERALD}>Pandas</Tags>
            <Tags color={ColorTags.YELLOW}>Scipy</Tags>
          </>
        }
      />
      <Project
        name="Project 3: AI Cover Letter Generator"
        description="Using AI to generate unique and personalized cover letters for your next job within seconds."
        link="https://github.com/lilacchio/AI-Cover-Letter-Generator"
        img={{ src: '/assets/images/letter.png', alt: 'Cover Letter' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Python</Tags>
            <Tags color={ColorTags.INDIGO}>Flask</Tags>
            <Tags color={ColorTags.ROSE}>HTML</Tags>
            <Tags color={ColorTags.PINK}>OpenAI</Tags>
          </>
        }
      />
      <Project
        name="Project 4: Bandist: Spotify Concert Tracker"
        description="A mobile app focusing on Ticketmaster and Spotify API to notify you about the latest concerts of your favorite artists."
        link="https://github.com/techstartucalgary/Bandist"
        img={{ src: '/assets/images/spotify.png', alt: 'Bandist' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Flutter</Tags>
            <Tags color={ColorTags.INDIGO}>Django</Tags>
            <Tags color={ColorTags.ROSE}>Dart</Tags>
            <Tags color={ColorTags.PINK}>REST</Tags>
          </>
        }
      />
      <Project
        name="Project 5: Meal.AI"
        description="A custom generated cost-efficient and sustainable meal planner which will generate meal plan for any parts of the world based on your BMI within seconds!"
        link="https://github.com/lilacchio/Meal.AI-Hackathon-"
        img={{ src: '/assets/images/lunch.png', alt: 'Meal.AI' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Django</Tags>
            <Tags color={ColorTags.INDIGO}>BootStrap</Tags>
            <Tags color={ColorTags.ROSE}>PostgreSQL</Tags>
            <Tags color={ColorTags.PINK}>OpenAI</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
