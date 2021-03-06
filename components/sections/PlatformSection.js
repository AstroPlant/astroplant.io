import PropTypes from "prop-types";
import FloatingGrid from "../FloatingGrid.js";
import ContentLayout from "../layouts/ContentLayout";
import styles from "../modules/PlatformSection.module.css";
import SanityImage from "../SanityImage.js";
import SanityLinkList from "../SanityLinkList";
import Section from "../Section";
import SectionDescription from "../SectionDescription";

export default function PlatformSection({ title, description, image, links }) {
  return (
    <Section id="platform">
      <ContentLayout>
        <FloatingGrid
          floatingElement={
            <SanityImage
              image={image}
              params={{ h: 1024 }}
              className={styles.mockUp}
            />
          }
        >
          <div className={styles.titleRow}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.chip}>BETA</div>
          </div>
          <SectionDescription color={"#DEE8FF"} richText={description} />
          {/* <SanityLinkList links={links} /> */}
        </FloatingGrid>
      </ContentLayout>
    </Section>
  );
}

PlatformSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  image: PropTypes.object.isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};
