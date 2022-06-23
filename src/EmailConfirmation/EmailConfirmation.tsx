import { useEffect, useState } from "react";
import { VerificationCard } from "./components/VerificationFailed/VerificationFailed";
import { EmailConfirmationFailedResult, 
         EmailConfirmationResult, 
         EmailConfirmationSucceededResult } from "./EmailConfirmationResult";

import { useDispatch, useSelector } from "react-redux";
import { confirmEmail, confirmEmailRemotely } from "./state/EmailActionCreators";
import React from "react";
import { useLocation } from "react-router-dom";
import { EmailConfirmationStore } from "./state/store";

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

export function EmailConfirmation() {
    const dispatch = useDispatch();
    const state = useSelector((state: EmailConfirmationStore) => state);
    const query = useQuery();

    useEffect(() => {
        const key = query.get('key');
        const userId = query.get('userId');
        if (key == null || userId == null) {
            return;
        }
        // @ts-ignore
        dispatch(confirmEmailRemotely(key, userId))
    }, []);
    
    if (state.result !== undefined) {
        return <VerificationCard result={state.result}/>
    } else {
        return <h1>Loading</h1>
    }
}