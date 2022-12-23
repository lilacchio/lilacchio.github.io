import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hello, I'm <GradientText>Lilacchio</GradientText> 👋
        </>
      }
      description={
        <>
          Hello! My name is Sakil and I am a 2nd year software engineering
          student at the University of Calgary. I am passionate about web
          development and machine learning, and I am always looking to expand my
          skillset. I have experience with various programming languages and
          frameworks, and I am always excited to learn new technologies.
        </>
      }
      avatar={
        <img
          className="h-64 w-64"
          src="/assets/images/avatar2.jpg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://github.com/lilacchio">
            <HeroSocial src="/assets/images/github.png" alt="Github icon" />
          </a>
          <br></br>
          <a href="mailto:mdsakilal.mahmud@ucalgary.ca">
            <HeroSocial src="/assets/images/outlook.png" alt="Email icon" />
          </a>
          <br></br>
          <a href="https://www.linkedin.com/in/sakmahmud/">
            <HeroSocial src="/assets/images/linkedin.png" alt="Linkedin icon" />
          </a>
          <br></br>
          <a href="https://medium.com/@lilacchio">
            <HeroSocial src="/assets/images/medium.png" alt="Medium icon" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
