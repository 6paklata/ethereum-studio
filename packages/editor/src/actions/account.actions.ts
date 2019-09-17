// Copyright 2018 Superblocks AB
//
// This file is part of Superblocks Lab.
//
// Superblocks Lab is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation version 3 of the License.
//
// Superblocks Lab is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Superblocks Lab.  If not, see <http://www.gnu.org/licenses/>.

import { IAccount, IEnvironment } from '../models/state';

export const accountActions = {

    OPEN_ACCOUNT_CONFIGURATION: 'OPEN_ACCOUNT_CONFIGURATION',
    openAccountConfig(account: IAccount) {
        return {
            type: accountActions.OPEN_ACCOUNT_CONFIGURATION,
            data: { account }
        };
    },

    CLOSE_ACCOUNT_CONFIGURATION: 'CLOSE_ACCOUNT_CONFIGURATION',
    closeAccountConfig() {
        return {
            type: accountActions.CLOSE_ACCOUNT_CONFIGURATION
        };
    },

    UPDATE_ACCOUNT_NAME: 'UPDATE_ACCOUNT_NAME',
    updateAccountName(account: IAccount, newName: string) {
        return {
            type: accountActions.UPDATE_ACCOUNT_NAME,
            data: { account, newName }
        };
    },


    UPDATE_ACCOUNT_NAME_SUCCESS: 'UPDATE_ACCOUNT_NAME_SUCCESS',
    updateAccountNameSuccess(oldName: string, newName: string) {
        return {
            type: accountActions.UPDATE_ACCOUNT_NAME_SUCCESS,
            data: { oldName, newName },
        };
    },

    UPDATE_ACCOUNT_NAME_FAIL: 'UPDATE_ACCOUNT_NAME_FAIL',
    updateAccountNameFail(error: any) {
        return {
            type: accountActions.UPDATE_ACCOUNT_NAME_FAIL,
            data: error
        };
    },

    SAVE_ACCOUNT_CONFIGURATION: 'SAVE_ACCOUNT_CONFIGURATION',
    saveAccountConfig(contractConfig: IAccount) {
        return {
            type: accountActions.SAVE_ACCOUNT_CONFIGURATION,
            data: { contractConfig }
        };
    },

    SAVE_ACCOUNT_CONFIGURATION_SUCCESS: 'SAVE_ACCOUNT_CONFIGURATION_SUCCESS',
    saveAccountConfigSuccess() {
        return {
            type: accountActions.SAVE_ACCOUNT_CONFIGURATION_SUCCESS
        };
    },

    SAVE_ACCOUNT_CONFIGURATION_FAIL: 'SAVE_ACCOUNT_CONFIGURATION_FAIL',
    saveAccountConfigFail(error: any) {
        return {
            type: accountActions.SAVE_ACCOUNT_CONFIGURATION_FAIL,
            data: error
        };
    },

    CREATE_NEW_ACCOUNT: 'CREATE_NEW_ACCOUNT',
    createNewAccount() {
        return {
            type: accountActions.CREATE_NEW_ACCOUNT,
        };
    },

    CREATE_NEW_ACCOUNT_SUCCESS: 'CREATE_NEW_ACCOUNT_SUCCESS',
    createNewAccountSuccess(dappFileData: any) {
        return {
            type: accountActions.CREATE_NEW_ACCOUNT_SUCCESS,
            data: { updatedDappFileData: dappFileData }
        };
    },

    DELETE_ACCOUNT: 'DELETE_ACCOUNT',
    deleteAccount(accountName: string) {
        return {
            type: accountActions.DELETE_ACCOUNT,
            data: { accountName }
        };
    },

    DELETE_ACCOUNT_SUCCESS: 'DELETE_ACCOUNT_SUCCESS',
    deleteAccountSuccess(dappFileData: any) {
        return {
            type: accountActions.DELETE_ACCOUNT_SUCCESS,
            data: { updatedDappFileData: dappFileData }
        };
    },

    SELECT_ACCOUNT_ENVIRONMENT: 'SELECT_ACCOUNT_ENVIRONMENT',
    selectAccountEnvironment(environment: IEnvironment, account: IAccount) {
        return {
            type: accountActions.SELECT_ACCOUNT_ENVIRONMENT,
            data: { environment, account }
        };
    },
};
