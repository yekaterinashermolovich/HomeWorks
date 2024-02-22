import ContactType from "src/types/Contact";
import { Form, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getContact } from "../contacts";
import Nullable from "src/types/Nullable";



export async function loader({ params }: LoaderFunctionArgs): Promise< { contact: Nullable<ContactType> }> {
  const contact = await getContact(params.contactId);
  return { contact };
}


const Contact=() => {

  const { contact } = useLoaderData() as{ contact: Nullable<ContactType>};
    
  return (
    <div id="contact">
      <div>
        <img
          key={contact?.avatar}
          src={contact?.avatar}
        />
      </div>

      <div>
        <h1>
          {contact?.first || contact?.last ? (
            <>
              {contact?.first} {contact?.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact?.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact?.twitter}`}
            >
              {contact?.twitter}
            </a>
          </p>
        )}

        {contact?.notes && <p>{contact?.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

type FavoriteProps = {
contact: Nullable<ContactType>
}

const Favorite = ({ contact }:FavoriteProps) => {
  // yes, this is a `let` for later
  let favorite = contact?.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}

