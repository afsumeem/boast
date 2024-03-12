import { Button, Input, ModalHeader } from "@nextui-org/react";
import style from "../../styles/WishlistForm.module.css";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";

const WishlistForm = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleJoinNow = () => {
    onOpen();
  };

  const handleClose = () => {
    onClose();
    setEmail("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleJoinNow();
  };

  return (
    <>
      <div className={style.newsLetterContainer} id="wishlistForm">
        {/* <div className="bg-[#fd7f3e] p-12 w-2/3">
          <h1 className="text-center text-white font-bold text-2xl">
            Are you an influencer? Join our Wishlist!
          </h1>
          <form className="flex justify-center mt-5">
            <input
              type="email"
              required
              placeholder="Enter Your Email here"
              className={`text-white rounded-none bg-inherit border px-3 focus:outline-white ${style.placeholderWhite}`}
              onChange={handleEmailChange}
              value={email}
            />
            <Button
              type="submit"
              onClick={handleJoinNow}
              className="rounded-none text-[#fd614a]"
            >
              Join Now
            </Button>
          </form>
        </div> */}
      </div>

      <div className="flex flex-col lg:flex-row gap-20 lg:gap-0 justify-around items-center py-20 bg-[#ffc200]">
        <img
          style={{ width: "663px", height: "549px" }}
          src="https://www.zywa.co/wp-content/uploads/2023/03/Screenshot-2023-03-08-at-12.50.37-AM-1024x848.png"
          alt=""
        />

        <div>
          <h5 className="font-extrabold text-xl mb-4">
            {" "}
            are you an Influencer?
          </h5>
          <h2
            className="text-5xl mb-4 font-extrabold"
            style={{ letterSpacing: "-4px" }}
          >
            join our Wishlist!
          </h2>
          <div className="my-10">
            <form className="flex mt-5" onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="Enter Your Email here"
                className={`text-black rounded-none bg-inherit border border-black px-3 focus:outline-black ${style.placeholderWhite}`}
                onChange={handleEmailChange}
                value={email}
              />
              <Button
                type="submit"
                onClick={handleJoinNow}
                className="rounded-none text-white bg-black"
              >
                Join Now
              </Button>
            </form>
          </div>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="bg-[#ffc200]">
                    Join Our Wishlist
                  </ModalHeader>
                  <ModalBody className=" ">
                    <form action="" className="">
                      <Input
                        className="mb-5"
                        variant="underlined"
                        type="text"
                        label="Name"
                        // placeholder="Enter your Name"
                      />
                      <div className="flex gap-5 mb-5">
                        <Input
                          variant="underlined"
                          type="text"
                          label="Instagram ID"
                          // placeholder="Enter your Instagram ID"
                        />
                        <Input
                          variant="underlined"
                          type="text"
                          label="Other Social Media ID"
                          // placeholder="Other Social Media ID"
                        />
                      </div>
                      <div className="flex gap-5 mb-5">
                        <Input
                          variant="underlined"
                          type="text"
                          label="Phone No."
                          // placeholder="Enter your Phone No."
                        />
                        <Input
                          variant="underlined"
                          type="email"
                          label="Email"
                          // placeholder="Enter your email"
                          value={email}
                        />
                      </div>
                      <Input
                        variant="underlined"
                        type="text"
                        // label="Number of followers on Insta/FB/tiktok"
                        placeholder="Number of followers on Insta/FB/tiktok"
                      />
                    </form>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="danger"
                      variant="light"
                      onClick={handleClose}
                      className="rounded-full"
                    >
                      Cancel
                    </Button>
                    <button
                      onClick={handleClose}
                      className="bg-black hover:bg-[#DE3996] text-white px-6 py-2 rounded-full hover:text-black duration-300 "
                    >
                      Join
                    </button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>

        {/*  */}
      </div>
    </>
  );
};

export default WishlistForm;