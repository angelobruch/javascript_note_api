import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Section, Help, Label } from "rbx";
import UserService from '../../../services/users';
import { Redirect } from "react-router-dom";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToRegister, setRedirectToRegister] = useState(false); // variable naming convention
    const [redirectToNotes, setRedirectToNotes] = useState(false); // variable naming convention
    const [error, setError] = useState(false); // variable naming convention

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        try {
            const user = await UserService.login({ email: email, password: password });
            setRedirectToNotes(true);
        } catch (error) {
            setError(true)
        }
    }

    if (redirectToRegister) // simpler if condition
        return <Redirect to={{ pathname: "/register" }} />
    if (redirectToNotes)
        return <Redirect to={{ pathname: "/notes" }} />

    return (
        <Fragment>
            <Column.Group centered>
                <form onSubmit={handleSubmit}>
                    <Column size={12}>
                        <Field>
                            <Label size="small">Email:</Label>
                            <Control>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    name="email"
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">Password:</Label>
                            <Control>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                    name="password"
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Column.Group>
                                    <Column>
                                        <a onClick={() => setRedirectToRegister(true)} className="button is-white has-text-custom-purple">Register</a> {/* changed onClick to arrow function */}
                                    </Column>
                                    <Column>
                                        <Button color="custom-purple" outlined>Login</Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                        {error && <Help color="danger">Email or Password invalid</Help>}
                    </Column>
                </form>
            </Column.Group>
        </Fragment>
    )
}

export default LoginForm;
