import { Button } from "@shared/ui";
import { Text } from "@shared/ui";
import { Title } from "@shared/ui";
import { Input } from "@shared/ui";
import { Checkbox } from "@shared/ui";

import masterCard from "@shared/assets/mastercard.svg";
import { useState } from "react";

export const Ui = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div
      className="ui"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        gap: "16px",
      }}
    >
      <div
        className=""
        style={{ display: "flex", gap: "16px", alignItems: "flex-end" }}
      >
        <Text text="Regular" fontSize="xs" fontWeight="regular" />
        <Text text="Medium" fontSize="sm" fontWeight="medium" />
        <Text text="Semibold" fontSize="md" fontWeight="semibold" />
        <Text text="Bold" fontSize="lg" fontWeight="bold" />
        <Text text="2xl" fontSize="2xl" fontWeight="bold" />
      </div>
      <div
        className=""
        style={{ display: "flex", gap: "16px", alignItems: "center" }}
      >
        <Title text="h1" tag="h1" fontSize="lg" fontWeight="bold" />
        <Title text="h2" tag="h2" fontSize="md" fontWeight="semibold" />
        <Title text="h3" tag="h3" fontSize="sm" fontWeight="medium" />
        <Title text="h4" tag="h4" fontSize="xs" fontWeight="regular" />
      </div>
      <div
        className=""
        style={{ display: "flex", gap: "16px", alignItems: "flex-end" }}
      >
        <Button text="Default" fontSize="xs" variant="default" size="xs" />
        <Button text="Primary" fontSize="sm" variant="primary" size="sm" />
        <Button text="Secondary" fontSize="md" variant="secondary" size="md" />
        <Button text="Tertiary" fontSize="lg" variant="tertiary" size="lg" />
      </div>
      <div
        className=""
        style={{ display: "flex", gap: "16px", alignItems: "flex-end" }}
      >
        <Input
          placeholder="Type here"
          fontSize="xs"
          size="xs"
          required
          icon={<img src={masterCard} alt="mastercard" />}
          iconPlace="right"
          variant="default"
        />
        <Input
          placeholder="Type here"
          fontSize="sm"
          size="sm"
          required
          icon={<img src={masterCard} alt="mastercard" />}
          iconPlace="right"
          variant="default"
        />
        <Input
          placeholder="Type here"
          fontSize="md"
          size="md"
          required
          icon={<img src={masterCard} alt="mastercard" />}
          iconPlace="right"
          variant="default"
        />
        <Input
          placeholder="Type here"
          fontSize="lg"
          size="lg"
          required
          icon={<img src={masterCard} alt="mastercard" />}
          iconPlace="right"
          variant="default"
        />
      </div>
      <div
        className=""
        style={{ display: "flex", gap: "16px", alignItems: "flex-end" }}
      >
        <Input
          placeholder="Type here"
          fontSize="xs"
          size="xs"
          required
          icon={<img src={masterCard} alt="mastercard" />}
          iconPlace="right"
          variant="lined"
        />
        <Input
          placeholder="Type here"
          fontSize="sm"
          size="sm"
          required
          icon={<img src={masterCard} alt="mastercard" />}
          iconPlace="right"
          variant="lined"
        />
        <Input
          placeholder="Type here"
          fontSize="md"
          size="md"
          required
          icon={<img src={masterCard} alt="mastercard" />}
          iconPlace="right"
          variant="lined"
        />
        <Input
          placeholder="Type here"
          fontSize="lg"
          size="lg"
          required
          icon={<img src={masterCard} alt="mastercard" />}
          iconPlace="right"
          variant="lined"
        />
      </div>
      <div
        className=""
        style={{ display: "flex", gap: "16px", alignItems: "center" }}
      >
        <Checkbox
          label="Primary"
          size="xs"
          backgroundColor="primary"
          onChange={() => setChecked(!checked)}
          checked={checked}
        />
        <Checkbox
          label="Secondary"
          size="sm"
          backgroundColor="secondary"
          onChange={() => setChecked(!checked)}
          checked={checked}
        />
        <Checkbox
          label="Tertiary"
          size="md"
          backgroundColor="tertiary"
          onChange={() => setChecked(!checked)}
          checked={checked}
        />
        <Checkbox
          label="Tertiary lg"
          size="lg"
          backgroundColor="tertiary"
          onChange={() => setChecked(!checked)}
          checked={checked}
        />
      </div>
    </div>
  );
};
