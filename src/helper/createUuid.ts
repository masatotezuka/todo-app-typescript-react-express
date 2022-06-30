import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";

export const createUuid = () => {
  const uuid = uuidv4();
  const nowDate = format(new Date(), "yyyy-MM-dd");
  const token = `${uuid}-${nowDate}`;
  return token;
};
