import { login } from "./login"
import { login2 } from "./login"

describe('login2', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        login2("Nath")
        expect(mockAlert).toHaveBeenCalledWith('Bem vinda, Nath!')
    })
})