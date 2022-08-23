// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingActions: {
    "Assign exercise load to context": "SET_EXERCISE_LOAD_AND_GO_NEXT";
    "Assign exercise name to context": "SET_EXERCISE_NAME_AND_GO_NEXT";
    "Assign exercise rest to context": "SET_EXERCISE_REST_AND_GO_NEXT";
    "Assign exercise set and rep to context": "SET_EXERCISE_SET_AND_REP_AND_GO_NEXT";
    "Navigate to load exercise creation form screen": "SET_EXERCISE_SET_AND_REP_AND_GO_NEXT";
    "Navigate to rest exercise creation form screen": "SET_EXERCISE_LOAD_AND_GO_NEXT";
    "Navigate to set and rep exercise creation form screen": "SET_EXERCISE_NAME_AND_GO_NEXT";
    "Notify parent that user exited the form": "USER_WENT_TO_PREVIOUS_SCREEN";
  };
  eventsCausingServices: {};
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates:
    | "Exercise load step"
    | "Exercise name step"
    | "Exercise rest step"
    | "Form is completed"
    | "Set and rep step";
  tags: never;
}
