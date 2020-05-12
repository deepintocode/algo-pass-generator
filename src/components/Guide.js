import React from "react";
import "./Guide.css";

export default function Guide() {
  return (
    <div className="Guide">
      <h2 className="double-break">Why?</h2>
      <p className="break">
        How many accounts do you have? Nowadays, it's common to have at least 10
        to 20 passwords, or even up to 100 or more depending on the user. Maybe
        you are using one password for all your accounts. Maybe your chosen
        password is actually something like "DsTd$@lM21aW" and you think it's
        quite strong. It surely is, but one only needs to decipher it once and
        get access to all your accounts.
      </p>
      <p className="break">
        It seems like you're a bit more cautious than that. You store all your
        strong, unique passwords in your notebook and keep it safely on your job
        desk. Until it falls in the hands of that new "trustworthy" colleague of
        yours.
      </p>
      <p className="break">
        OK, you don't do any of the above, since you're security conscious. You
        use a password manager and you feel safe. And indeed you are. Until you
        don't have access to that software. Whether because you cannot install
        it on your work computer, or because you are using a public computer,
        etc.
      </p>
      <p className="break">
        Instead of a password manager, or a notebook that contains all your
        passwords and sits next to your work laptop, you can use an easy way to
        create strong passwords that are easy to remember.
      </p>
      <p className="break">
        <em>An algorithmic password generator.</em>
      </p>
      <h2 className="double-break">How?</h2>
      <p className="break">
        The algorthmic password generator offers different security levels,
        which are added sequentially. After you select the options you want, you
        can click on the password field and copy the password to your clipboard.
        This guide is assuming that you're selecting all available options, but
        you can also select only the ones you want.
      </p>
      <ul>
        <li className="break">
          <strong>Phrase of Choice</strong>: The first level and the base of the
          algorithm. It can be a sentence from a book you like, a lyric that you
          sing in the shower, or a quote from your favourite philosopher.
          Whatever you choose, just make sure you remember it. Here we are using
          "It's the end of the world as we know it" from the famous REM song.
          The generator is selecting the first letter of each word. Our initial
          password is "iteotwawki". You can stop here and use this password for
          everything, but this is definitely not recommended.
        </li>
        <li className="break">
          <strong>Name of service you want to signup for</strong>: Make it
          service specific. For this example we are signing up for Reddit. The
          below options are based on this name.
        </li>
        <li className="break">
          <strong>Include first character of website/app</strong>: This option
          adds the first character of the service ("Reddit" --> "r") as the
          first character of our password. Our password is now "riteotwawki".
        </li>
        <li className="break">
          <strong>Include last character of website/app</strong>: Same as the
          above, but this time we are adding the last character of the service
          ("Reddit" --> "t") as the last character of our password. Our password
          is now "riteotwawkit".
        </li>
        <li className="break">
          <strong>
            Capitalize characters according to website characters' parity
          </strong>
          : Parity defines if a number is even or odd. This option counts the
          total characters of our service and capitalizes our password
          accordingly. When the parity is even, the even characters (2, 4, 6,
          etc.) are capitalized. When it's odd, the odd characters (1, 3, 5,
          etc.) are capitalized. In our case "Reddit" has 6 characters, so the
          parity is even. This option only capitalizes the characters of our
          phrase, so if we are using the characters from the service we want to
          signup for, they remain lowercase. After we select this option, our
          password is "riTeOtWaWkIt".
        </li>
        <li className="break">
          <strong>Include total numbers of characters of website/app</strong>:
          Once again we count the characters of the service, but this time we
          add this number to the end of the password. Our is password is now
          "riTeOtWaWkIt6".
        </li>
        <li className="break">
          <strong>Include punctuation symbol of choice</strong>: Last but not
          least, we can add a punctuation symbol at the end of our password. In
          this case, we are using "!" and our final password is
          "riTeOtWaWkIt6!".
        </li>
      </ul>
      <h2 className="double-break">Conclusion</h2>
      <p className="break">
        Although you can use this generator and create strong, unique passwords,
        the main takeaway from this should be that it's not that hard to come up
        with a technique that will help you stay safe in the vast online world.
        Or simply use a password manager...
      </p>
      <h2 className="double-break">General Password Tips</h2>
      <ul>
        <li>
          <strong>DO</strong> use a password manager, e.g. KeePass, Dashlane.
        </li>
        <li>
          <strong>DO</strong> use dual-factor authentication.
        </li>
      </ul>
      <br />
      <ul>
        <li>
          <strong>DO NOT</strong> use the same password for every account.
        </li>
        <li>
          <strong>DO NOT</strong> write your passwords down and leave them on
          your desk.
        </li>
      </ul>
    </div>
  );
}
