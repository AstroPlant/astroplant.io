import Button from "../Button";
import styles from "../modules/CTACard.module.css";
import SocialIcons from "../SocialIcons";
import CTACard from "./CTACard";

export default function CommunityCard({ ...props }) {
  return (
    <CTACard {...props}>
      <div className={styles.buttonRow}>
        <Button label={"Learn more"} color={"light"} />
        <SocialIcons color={"secondary"} className={styles.justifyEnd} />
      </div>
    </CTACard>
  );
}
