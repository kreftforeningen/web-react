import { NativeSelect, NativeSelectOption } from "@/lib/main";

export default function NativeSelectDemo() {
  return (
    <>
      <h2>Native Select</h2>
      <NativeSelect>
        <NativeSelectOption value="">Select an option</NativeSelectOption>
        <NativeSelectOption value="airbnb">Airbnb</NativeSelectOption>
        <NativeSelectOption value="booking">Booking.com</NativeSelectOption>
        <NativeSelectOption value="vrbo">Vrbo</NativeSelectOption>
      </NativeSelect>
    </>
  );
}
