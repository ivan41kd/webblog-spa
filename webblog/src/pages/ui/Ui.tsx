import { Button, Text, Title, Input, Checkbox } from "@shared/ui";

import styles from "./ui.module.scss";

import masterCard from "@shared/assets/mastercard.svg";
import { useState } from "react";

export const Ui = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className={styles.ui}>
      <div className={styles[`ui-items`]}>
        <Text text="Regular" fontSize="xs" fontWeight="regular" />
        <Text text="Medium" fontSize="sm" fontWeight="medium" />
        <Text text="Semibold" fontSize="md" fontWeight="semibold" />
        <Text text="Bold" fontSize="lg" fontWeight="bold" />
        <Text text="2xl" fontSize="2xl" fontWeight="bold" />
      </div>
      <div className={styles[`ui-items`]}>
        <Title text="h1" tag="h1" fontSize="lg" fontWeight="bold" />
        <Title text="h2" tag="h2" fontSize="md" fontWeight="semibold" />
        <Title text="h3" tag="h3" fontSize="sm" fontWeight="medium" />
        <Title text="h4" tag="h4" fontSize="xs" fontWeight="regular" />
      </div>
      <div className={`${styles[`ui-items`]} ${styles.end}`}>
        <Button fontSize="xs" variant="default" size="xs">
          <Text text="Default" />
        </Button>
        <Button fontSize="sm" variant="primary" size="sm">
          <Text text="Primary" />
        </Button>
        <Button fontSize="md" variant="secondary" size="md">
          <Text text="Secondary" />
        </Button>
        <Button fontSize="lg" variant="tertiary" size="lg">
          <Text text="Tertiary" />
        </Button>
      </div>
      <div className={`${styles[`ui-items`]} ${styles.end}`}>
        <Input
          placeholder="Type here"
          fontSize="xs"
          size="xs"
          icon={<img src={masterCard} alt="mastercard" />}
          iconPlace="right"
          variant="default"
        />
        <Input
          placeholder="Type here"
          fontSize="sm"
          size="sm"
          icon={<img src={masterCard} alt="mastercard" />}
          iconPlace="right"
          variant="default"
        />
        <Input
          placeholder="Type here"
          fontSize="md"
          size="md"
          icon={<img src={masterCard} alt="mastercard" />}
          iconPlace="right"
          variant="default"
        />
        <Input
          placeholder="Type here"
          fontSize="lg"
          size="lg"
          icon={<img src={masterCard} alt="mastercard" />}
          iconPlace="right"
          variant="default"
        />
      </div>
      <div className={`${styles[`ui-items`]} ${styles.end}`}>
        <Input
          placeholder="Type here"
          fontSize="xs"
          size="xs"
          icon={<img src={masterCard} alt="mastercard" />}
          iconPlace="right"
          variant="lined"
        />
        <Input
          placeholder="Type here"
          fontSize="sm"
          size="sm"
          icon={<img src={masterCard} alt="mastercard" />}
          iconPlace="right"
          variant="lined"
        />
        <Input
          placeholder="Type here"
          fontSize="md"
          size="md"
          icon={<img src={masterCard} alt="mastercard" />}
          iconPlace="right"
          variant="lined"
        />
        <Input
          placeholder="Type here"
          fontSize="lg"
          size="lg"
          icon={<img src={masterCard} alt="mastercard" />}
          iconPlace="right"
          variant="lined"
        />
      </div>
      <div className={styles[`ui-items`]}>
        <Checkbox
          label="Primary"
          size="xs"
          backgroundColor="primary"
          onChange={() => setChecked(!checked)}
          isChecked={checked}
        />
        <Checkbox
          label="Secondary"
          size="sm"
          backgroundColor="secondary"
          onChange={() => setChecked(!checked)}
          isChecked={checked}
        />
        <Checkbox
          label="Tertiary"
          size="md"
          backgroundColor="tertiary"
          onChange={() => setChecked(!checked)}
          isChecked={checked}
        />
        <Checkbox
          label="Tertiary lg"
          size="lg"
          backgroundColor="tertiary"
          onChange={() => setChecked(!checked)}
          isChecked={checked}
        />
      </div>
    </div>
  );
};
