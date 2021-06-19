import { render, fireEvent, act } from "@test/testUtils";
import Login from "@pages/index";

jest.mock("next/router", () => {
  const mockPath = { route: "/", pathname: "/", query: "", asPath: "" };
  return {
    useRouter() {
      return mockPath;
    },
    ...mockPath,
  };
});

describe("Login page", () => {
  it("login test", async () => {
    const promise = Promise.resolve();

    const { getByTestId, getByText } = render(<Login />);

    const emailInput = "eve.holt@reqres.in";
    const passwordInput = "cityslicka";

    const email = getByTestId("email");
    const password = getByTestId("password");
    const login = getByText("login");

    fireEvent.change(email, { target: { value: emailInput } });
    fireEvent.change(password, { target: { value: passwordInput } });

    fireEvent.click(login);

    await act(() => promise);
  });
});
