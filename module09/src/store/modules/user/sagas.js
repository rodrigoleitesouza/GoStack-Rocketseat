import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";
import api from "~/services/api";

import {} from "";

export function* updateProfile({ payload }) {
  const { name, email, ...rest } = payload.data;

  const profile = Object.assign(
    { name, email },
    rest.oldPassword ? rest : {}
  );

  const response = yield call(api.put, "users", profile);

  toast.success("Perfil atualizado com sucesso!");

  yield put(updateProfileSuccess)
}

export default all([
  takeLatest("@user/UPDATE_PROFILE_REQUEST", updateProfile),
]);
