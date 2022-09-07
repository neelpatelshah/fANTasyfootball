import { omit } from "lodash"

export const merge = (xs, ys, on) => 
    xs.map(x => { return { ...omit(x, "owner"), ...(ys.find(y => x.owner === y.owner))}})