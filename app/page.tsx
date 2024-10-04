import { Main, Section, Container } from "@/components/craft";
import Hero from "./components/home-page/hero";
import FeatureKiri from "./components/home-page/featureKiri";
import FeatureKanan from "./components/home-page/featureKanan";
import Footer from "./components/home-page/footer";

export default function Page() {
  return (
    <Main>
      <Section>
        <Container>
          <div id="hero">
            <Hero />
          </div>
          <div id="featureKiri">
            <FeatureKiri />
          </div>
          <div id="featureKanan">
            <FeatureKanan />
          </div>
          <Footer />
        </Container>
      </Section>
    </Main>
  );
}