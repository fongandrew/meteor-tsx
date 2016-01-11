/// <reference path="../typings/react/react.d.ts" />
module App {
  export class Main extends React.Component<{}, {}> {
    constructor(props: {}) {
      super(props);
    }

    render() {
      return (
        <div className="container">
          Hello world
        </div>
      );
    }
  };
}
