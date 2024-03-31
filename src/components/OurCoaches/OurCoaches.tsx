import Card from './Card';

const OurCoaches = () => {
  return (
    <section id="ourcoaches" className="mx-auto w-5/6 items-center justify-center py-24 overflow-x-hidden">
      {/* Add overflow-x-hidden class to the section */}
      <div className="md:flex md:flex-col overflow-x-hidden">
        <Card 
          videoSide="left"
          player="Faker"
          title="The Unkillable Demon"
          description='Teaching you how to play on top of your games - simultaneously'
          url="https://www.youtube.com/watch?v=cSpLzG0pvk4"
        />

        <Card 
          videoSide="right"
          player="Tyler1"
          title="Your Average Teammate"
          description='The best player to learn respect and collaboration from. You might also get some gym tips while you are at it!'
          url="https://www.youtube.com/watch?v=0hRaGXWim2k"
        />

        <Card 
          videoSide="left"
          player="Kesha"
          title="The Sanest Nunu Player"
          description="We're gonna let the clip do the talking on this one "
          url="https://www.youtube.com/watch?v=jGEVB6lbcGM"
        />
      </div>
    </section>
  );
};

export default OurCoaches;
