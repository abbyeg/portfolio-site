import TextContent from "./layout/TextContent";

const About = () => {
  return (
    <TextContent>
      <div className="h-screen">
        <div className="flex flex-wrap flex-col">
          <div className="flex flex-row">
            <div className="text-right font-extrabold m-6">
              bio
            </div>
            <div className="basis-1/2 font-bold m-6">
              Hi, I&apos;m Abby. I&apos;m an artist and programmer living in the midwest. I&apos;m interested in software engineering, interactive media, art, and design.
            </div>
          </div>
          <div className="flex flex-row">
            <div className="basis-1/4 text-right font-extrabold m-6"></div>
            <div className="basis-1/2 font-bold m-6">
              If you&apos;re interested in reaching out, please send any questions or inquiries <span className="hover:underline"><a href="mailto:studio@abbygrobbel.com">here.</a></span>
            </div>
          </div>
        </div>
      </div>
    </TextContent>
  );
};

export default About;
