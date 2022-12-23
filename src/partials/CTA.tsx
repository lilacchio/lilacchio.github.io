import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Subscribe to my <GradientText>Newsletters</GradientText>
        </>
      }
      description="Interested in knowing about my goals and perspective? Subscribve now! One personized email per month."
    />
  </Section>
);

export { CTA };
