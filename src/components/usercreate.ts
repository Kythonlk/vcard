import { XataClient } from "../xata";

  const xata = new XataClient({
    apiKey: import.meta.env.XATA_API_KEY,
    branch: import.meta.env.XATA_BRANCH
  });
const userForm = document.getElementById("userForm") as HTMLFormElement;
userForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const idInput = document.getElementById("id") as HTMLInputElement;
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const bioInput = document.getElementById("bio") as HTMLTextAreaElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;

  const id = idInput.value;
  const name = nameInput.value;
  const bio = bioInput.value;
  const email = emailInput.value;

  try {
    const record = await xata.db.Users.create({
      id,
      name,
      bio,
      email,
    });

    console.log(record);
    // You can add code here to handle success, like showing a success message.
  } catch (error) {
    console.error(error);
    // Handle the error, e.g., show an error message.
  }
});
