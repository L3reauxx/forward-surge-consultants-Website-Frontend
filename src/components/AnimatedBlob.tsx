import { FluidCanvas } from "./FluidCanvas";
import { FlowField } from "./FlowField";

export function AnimatedBlob() {
  return (
    <>
      <FluidCanvas />
      <FlowField centered={true} />
    </>
  );
}
