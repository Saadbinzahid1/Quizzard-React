export default function Progress({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
}) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index} />
      <p>
        Question {index + 1} / {numQuestions}
      </p>
      <p>
        {points} / {maxPossiblePoints} points
      </p>
    </header>
  );
}
