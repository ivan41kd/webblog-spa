import { Button, Text, Title, Input, Checkbox } from "@shared/ui";
import { MasterCardIcon } from "@/shared/icons";

import { UiList } from "./ui";
import styles from "./ui.module.scss";
import { Section } from "@/shared/ui";

export const UiPage = () => {
  return (
    <Section className={styles.ui}>
      <div className={styles["ui-wrapper"]}>
        <UiList
          items={[
            <Text fontSize="sm" fontWeight="medium">
              Medium
            </Text>,
            <Text fontSize="md" fontWeight="semibold">
              Semibold
            </Text>,
            <Text fontSize="lg" fontWeight="bold">
              Bold
            </Text>,
          ]}
        />
        <UiList
          items={[
            <Title tag="h1" fontSize="2xl" fontWeight="bold">
              h1
            </Title>,
            <Title tag="h2" fontSize="xl" fontWeight="semibold">
              h2
            </Title>,
            <Title tag="h3" fontSize="lg" fontWeight="medium">
              h3
            </Title>,
            <Title tag="h4" fontSize="md" fontWeight="regular">
              h4
            </Title>,
            <Title tag="h5" fontSize="sm" fontWeight="regular">
              h5
            </Title>,
            <Title tag="h6" fontSize="xs" fontWeight="regular">
              h6
            </Title>,
          ]}
        />
        <UiList
          items={[
            <Button fontSize="sm" variant="default" size="xs">
              Default
            </Button>,
            <Button fontSize="sm" variant="primary" size="sm">
              Primary
            </Button>,
            <Button fontSize="md" variant="secondary" size="md">
              Secondary
            </Button>,
            <Button fontSize="lg" variant="tertiary" size="lg">
              Tertiary
            </Button>,
          ]}
          placement="end"
        />
        <UiList
          items={[
            <Input
              placeholder="Type here"
              fontSize="sm"
              size="xs"
              icon={<MasterCardIcon />}
              iconPlace="right"
              variant="default"
              type="email"
            />,
            <Input
              placeholder="Type here"
              fontSize="sm"
              size="sm"
              variant="default"
              type="password"
            />,
            <Input
              placeholder="Type here"
              fontSize="md"
              size="md"
              variant="default"
              type="email"
            />,
            <Input
              placeholder="Type here"
              fontSize="lg"
              size="lg"
              variant="default"
              type="password"
            />,
          ]}
          placement="end"
        />
        <UiList
          items={[
            <Input
              placeholder="Type here"
              fontSize="sm"
              size="xs"
              icon={<MasterCardIcon />}
              iconPlace="right"
              variant="lined"
              readOnly
            />,
            <Input
              placeholder="Type here"
              fontSize="sm"
              size="sm"
              icon={<MasterCardIcon />}
              iconPlace="right"
              variant="lined"
              isDisabled
            />,
            <Input fontSize="md" size="md" variant="lined" type="email" />,
            <Input
              placeholder="Type here"
              fontSize="lg"
              size="lg"
              variant="lined"
              type="password"
              isRequired
            />,
          ]}
          placement="end"
        />
        <UiList
          items={[
            <Checkbox size="sm" />,
            <Checkbox size="md" variant="primary" />,
            <Checkbox size="lg" variant="primary" isRequired />,
          ]}
        />
      </div>
    </Section>
  );
};
