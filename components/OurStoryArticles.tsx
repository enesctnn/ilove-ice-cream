import ArticleWrapper from './ArticleWrapper';

const OurStoryArticles = () => (
  <div className="w-full h-max bg-ellipse from-custom-red-100 to-custom-red-400 py-56 pb-10 relative 3xl:h-screen">
    <div
      className="w-full h-2 bg-gradient-to-b from-custom-red-500 to-transparent absolute top-0"
      aria-hidden
    />
    <div className="flex flex-col gap-y-20 px-10 lg:px-20">
      <ArticleWrapper
        description={`Welcome to "I Love Ice Cream," your go-to spot for the creamiest ice creams and the most delightful boba teas in the city. Celebrating four sweet years, we're not just a dessert haven – we're a taste adventure for families and a trendy hangout for college students. Since 2020, we've been crafting exceptional ice cream flavors using the finest ingredients, becoming a beloved part of the community. And that's not all – our handcrafted boba teas add an extra layer of excitement to your "I Love Ice Cream" experience.`}
        header="Welcome"
        image="/cup-ice-cream.png"
        alt="caramel flavor ice cream in blue cup"
      />
      <ArticleWrapper
        description={`Our menu is a fusion of creativity, offering classic and avant-garde choices for both ice creams and boba teas. From family outings to college study breaks, our cozy space welcomes everyone with laughter, warmth, and delicious treats. As we mark our four-year milestone, we're thrilled to invite the vibrant college community to join the "I Love Ice Cream" family. Our Instagram-worthy boba teas are not just beverages – they're a statement, a trend, a moment waiting to be shared.
            Whether you're a family seeking dessert bliss or a college student craving a tasty escape, "I Love Ice Cream" is here to make every moment sweeter. Thanks for four years of love and support – here's to many more years of saying "I Love Ice Cream" with every delightful sip and scoop!
            `}
        header="I Love Ice Cream"
        image="/i-love-ice-cream.png"
        alt="welcome image designed for users"
      />
      <ArticleWrapper
        description={`Our menu is a fusion of creativity, offering classic and avant-garde choices for both ice creams and boba teas. From family outings to college study breaks, our cozy space welcomes everyone with laughter, warmth, and delicious treats. As we mark our four-year milestone, we're thrilled to invite the vibrant college community to join the "I Love Ice Cream" family. Our Instagram-worthy boba teas are not just beverages – they're a statement, a trend, a moment waiting to be shared.
            Whether you're a family seeking dessert bliss or a college student craving a tasty escape, "I Love Ice Cream" is here to make every moment sweeter. Thanks for four years of love and support – here's to many more years of saying "I Love Ice Cream" with every delightful sip and scoop!
            `}
        header="I Love Ice Cream"
        image="/i-love-ice-cream.png"
        alt="welcome image designed for users"
      />
    </div>
  </div>
);

export default OurStoryArticles;
