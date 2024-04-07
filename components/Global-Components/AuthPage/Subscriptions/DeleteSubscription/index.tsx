"use client";

import { removeSubscriptionById } from "@/app/dashboard/_actions";
import {
  Briefcase,
  CheckCheck,
  CircleDollarSign,
  Clock,
  CornerDownRight,
  CornerRightUp,
  CreativeCommons,
  Eye,
  FileWarning,
  HeartHandshake,
  HelpingHand,
  Laptop2,
  Link,
  PencilLine,
  Radiation,
  Terminal,
  Trash2,
  User,
  UserCog,
  UserSquare,
} from "lucide-react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { Button, Modal, Placeholder } from "rsuite";

interface Props {
  id: string;
}

const DeleteSubscription = ({ id }: Props) => {
  const [open, setOpen] = useState(false);
  const [overflow, setOverflow] = useState(true);
  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    await removeSubscriptionById(id);
    setOpen(false);
  };

  return (
    <>
      <button
        className="p-1 border border-gray-500 rounded-lg hover:bg-red-500 hover:text-white"
        onClick={() => setOpen(true)}
      >
        <Trash2 />
      </button>

      <Modal
        backdrop="static"
        role="alertdialog"
        open={open}
        onClose={handleClose}
      >
        <Modal.Header>Delete Job Post</Modal.Header>
        <Modal.Body>
          <div className="flex items-center w-full">
            <FileWarning />
            Are you sure you want to{" "}
            <strong className="px-2 text-red-500">DELETE</strong> This
            subscription?
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={handleDelete}
            className="px-4 py-2 mx-2 text-red-500 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white"
          >
            Delete
          </button>
          <button
            onClick={handleClose}
            className="px-4 py-2 mx-2 text-gray-800 border border-gray-800 rounded-lg hover:bg-gray-800 hover:text-white"
          >
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteSubscription;
