export type Payload = void | SuperJSONValue;

// The part below was copied from SuperJSON and slightly modified:
// https://github.com/blitz-js/superjson/blob/ae7dbcefe5d3ece5b04be0c6afe6b40f3a44a22a/src/types.ts
//
// We couldn't use SuperJSON's types directly because:
//   1. They aren't exported publicly.
//   2. They have a werid quirk that turns `SuperJSONValue` into `any`. 
//      See why here: 
//      https://github.com/blitz-js/superjson/pull/36#issuecomment-669239876
//
// We changed the code as little as possible to make future comparisons easier.

type PrimitiveJSONValue = string | number | boolean | undefined | null;

type JSONValue = PrimitiveJSONValue | JSONArray | JSONObject;

interface JSONArray extends Array<JSONValue> {
}

interface JSONObject {
    [key: string]: JSONValue;
}

type SerializableJSONValue = Symbol | Set<SuperJSONValue> | Map<SuperJSONValue, SuperJSONValue> | undefined | bigint | Date | RegExp;

type SuperJSONValue = JSONValue | SerializableJSONValue | SuperJSONArray | SuperJSONObject;

interface SuperJSONArray extends Array<SuperJSONValue> {
}

interface SuperJSONObject {
    [key: string]: SuperJSONValue;
}
