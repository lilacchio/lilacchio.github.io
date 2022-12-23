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
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
