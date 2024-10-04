import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export async function generateMetadata() {
  return {
    title: `Frequently Asked Questions - WTFilm`, // Dynamically set the title
    description: `Find answers to common questions about WTFilm, including streaming, subscriptions, and more. Get the help you need to enhance your movie experience!`, // Dynamically set the description
  };
}

export default function page() {
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl w-full text-center my-8">
          FAQ
        </h1>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-screen-lg mx-auto px-3 md:px-28"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Is it legal to watch movies on this website?
            </AccordionTrigger>
            <AccordionContent>
              We only host movies that are in the public domain or legally
              distributed by the creators for free. It is your responsibility to
              ensure that your viewing is legal in your country.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Do I need to create an account to watch movies?
            </AccordionTrigger>
            <AccordionContent>
              No, you can stream most movies without creating an account.
              However, signing up allows you to save your favorites, get
              recommendations, and interact with the community.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Are there any hidden fees?</AccordionTrigger>
            <AccordionContent>
              No, the website is entirely free to use. There are no hidden fees
              or subscription requirements.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Why am I seeing ads on the website?
            </AccordionTrigger>
            <AccordionContent>
              We rely on ads to support the platform and keep it free. We try to
              keep the ads minimal and non-intrusive.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Can I download movies to watch offline?
            </AccordionTrigger>
            <AccordionContent>
              Currently, downloading movies is not available. You can stream
              them as long as you have an internet connection.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Are subtitles available?</AccordionTrigger>
            <AccordionContent>
              Yes, many movies have subtitles available in various languages.
              Look for the subtitle options below the video player.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>
              The movie is not playing properly. What should I do?
            </AccordionTrigger>
            <AccordionContent>
              If you’re experiencing playback issues, try the following:
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Refresh the page</li>
                <li>Clear your browser cache</li>
                <li>Use a different browser</li>
                <li>Ensure your internet connection is stable</li>
              </ul>
              If the issue persists, contact our support team.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>
              How often is the movie library updated?
            </AccordionTrigger>
            <AccordionContent>
              We update our library regularly, adding new public domain films
              and free releases. Follow us on social media or subscribe to our
              newsletter for updates.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger>
              Can I request a movie to be added?
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can submit movie requests via our Contact page. We’ll do
              our best to find legal versions of your requested films and add
              them to the site.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger>
              Is there a mobile app available?
            </AccordionTrigger>
            <AccordionContent>
              We are currently working on a mobile app to make streaming more
              convenient. In the meantime, our website is fully optimized for
              mobile browsers.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-11">
            <AccordionTrigger>
              Can I share movies with friends?
            </AccordionTrigger>
            <AccordionContent>
              Yes, each movie page has social sharing buttons that allow you to
              share links with your friends easily.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-12">
            <AccordionTrigger>
              Is my personal information safe?
            </AccordionTrigger>
            <AccordionContent>
              We take privacy seriously and ensure that your data is protected.
              We don’t sell or share your information with third parties.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-13">
            <AccordionTrigger>
              What should I do if I find illegal content on the site?
            </AccordionTrigger>
            <AccordionContent>
              If you come across content that you believe violates copyright
              laws, please report it to us immediately through our contact page,
              and we will investigate the matter.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Footer />
    </div>
  );
}
