import "./StartPage.css";
import { boardImage, boardSizes } from "../data";

function StartPage({ preferences, setPreferences, startGame }) {
  return (
    <div className="preferences">
      <form>
        <div className="block">
          <p>Choose board size</p>
          <select
            required
            onChange={(event) =>
              setPreferences({ ...preferences, size: event.target.value })
            }
          >
            {boardSizes.map(({ name, value }, id) => (
              <option key={id} value={value}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="block">
          <p>Choose board image</p>
          <select
            required
            onChange={(event) =>
              setPreferences({ ...preferences, images: event.target.value })
            }
          >
            {boardImage.map(({ name, value }, id) => (
              <option key={id} value={value}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="block">
          <input
            type="submit"
            className="btn"
            onClick={(event) => {
              event.preventDefault();
              startGame();
            }}
            value="Start New Game"
          />
        </div>
      </form>
    </div>
  );
}

export default StartPage;
