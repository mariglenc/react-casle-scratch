import { Can } from "@casl/react";
import { defineAbilityFor } from "./ability";

function App() {
  const admin = { role: "admin", isAuthorised: false };
  const manager = { role: "manager", isAuthorised: false };
  const author = { role: "author", isAuthorised: false };
  const reader = { role: "reader", isAuthorised: false };
  const test = { role: "test", isAuthorised: true };

  const abilityAdmin = defineAbilityFor(admin);
  const abilityManager = defineAbilityFor(manager);
  const abilityAuthor = defineAbilityFor(author);
  const abilityReader = defineAbilityFor(reader);
  const abilityTest = defineAbilityFor(test);

  return (
    <div className="App">
      <header className="App-header">
        <p>This is an example of CASL in React.</p>
        <p>
          So if the user has permisssion the button wil show otherwise wont
          show.
        </p>
      </header>
      
      <p>abilityAdmin:</p>
      <div style={{ display: "flex" }}>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            borderRadius: "10px",
            margin:"10px"
          }}
        >
          <p>Can Create Article</p>
          <p> I="create" an="article" </p>
          <Can I="create" an="article" ability={abilityAdmin}>
        <button>Create Article</button>
      </Can>
        </div>
      </div>
          
      {/* ******************************************* */}
      
      <p>Test user.isAuthorised :</p>
      <div style={{ display: "flex" }}>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            borderRadius: "10px",
            margin:"10px"
          }}
        >
          <p>Can Create Article</p>
          <p> I="create" an="article" </p>
          <Can I="create" an="article" ability={abilityTest}>
            <button>Create Article</button>
          </Can>
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            borderRadius: "10px",
            margin:"10px"
          }}
        > 
          <p>Can update Profile</p>
          <p> I="update" an="profile" </p>
          <Can I="update" an="profile" ability={abilityTest}>
            <button>Update Profile</button>
          </Can>
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            borderRadius: "10px",
            margin:"10px"
          }}
        > <p>Canot create Profile</p>
          <p> I="create" an="profile" </p>
          <Can I="create" an="profile" ability={abilityTest}>
            <button>Create Profile</button>
          </Can>
        </div>
      </div>
      <p>test authorized:</p>
    </div>
  );
}

export default App;
