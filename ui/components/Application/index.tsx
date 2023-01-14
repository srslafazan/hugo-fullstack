export const Application = ({
  view = false,
  edit = false,
  application = {},
}) => {
  return view ? (
    <div>
      <h1>View application</h1>
      <pre>{JSON.stringify(application, null, 2)}</pre>
    </div>
  ) : edit ? (
    <div>
      <h1>Edit application</h1>
      <pre>{JSON.stringify(application, null, 2)}</pre>
    </div>
  ) : (
    <div>"Invalid"</div>
  );
};
