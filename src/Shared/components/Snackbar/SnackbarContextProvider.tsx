  
  import React, { useEffect, useState } from 'react'
  import { SnackbarOptions } from './Snackbar';
    

  type SnackbarContextProviderProps = {
    children: JSX.Element
  }

  type SnackbarArgs = {
    message: string;
    actionName: string;
    action: () => void;
  }

  export type SnackbarContextProviderState = {
    close: () => void;
    show: (args: SnackbarArgs) => void;
    visible: boolean;
    message: string;
    action?: () => void;
    actionName: string;
  }


  export const SnackbarContext = React.createContext<SnackbarContextProviderState>({
    close: () => {},
     show: (args) => {}, 
     visible: false,
     actionName: '',
     message: ''
    });

  const TIMEOUT_IN_MILLISECONDS = 8000;
  
  export const SnackbarContextProvider: React.FC<SnackbarContextProviderProps> = ({ children }) => {
    const [snackOptions, setSnackOptions] = useState<SnackbarOptions>({
      actionName: '',
      message: '',
      visible: false,
    });
  
    useEffect(() => {
      let timeout: NodeJS.Timeout | undefined;
      console.log('buraya girdi')
      if (snackOptions.visible) {
          timeout = setTimeout(() => close(), TIMEOUT_IN_MILLISECONDS)
      }
      return () => {
          if (timeout !== undefined) {
              clearTimeout(timeout);
          }
      }
  }, [snackOptions]);

    const close = () => {
        setSnackOptions((prev) => {
            return {...prev, visible: false}
        })
    }

    const show = (args: SnackbarArgs) => {
        setSnackOptions((prev) => {
            return {
                actionName: args.actionName,
                action: args.action,
                message: args.message,
                close: close,
                visible: true
            }
        })
    }

    return (
      <SnackbarContext.Provider value={{ show, close, 
        visible: snackOptions.visible, 
        action: snackOptions.action, 
        actionName: snackOptions.actionName, 
        message: snackOptions.message 
      }}>
        {children}
      </SnackbarContext.Provider>
    )
  }
  