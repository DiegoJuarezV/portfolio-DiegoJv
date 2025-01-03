import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export function DialogSizes({ title, body }) {
  const [size, setSize] = React.useState(null);
 
  const handleOpen = (value) => setSize(value);
 
  return (
    <>
      <div className="mb-3 flex gap-3">
        <Button onClick={() => handleOpen("md")} variant="gradient" color="white" size="lg">
          Más información
        </Button>
      </div>
      <Dialog
        open={
          size === "md" 
        }
        size={size || "md"}
        handler={handleOpen}
      >
        <DialogHeader>{title}</DialogHeader>
        <DialogBody className="text-black text-base">
          {body}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="black"
            onClick={() => handleOpen(null)}
          >
            <span>Ok</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}