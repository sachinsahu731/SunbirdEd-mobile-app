import { AddMemberToGroupPage } from './add-member-to-group.page';
import { ProfileService, GroupService } from '@project-sunbird/sunbird-sdk';
import { Router } from '@angular/router';
import { Platform, PopoverController } from '@ionic/angular';
import { AppHeaderService, CommonUtilService } from '@app/services';
import { Location } from '@angular/common';
import { of, throwError, Subscription } from 'rxjs';

describe('AddMemberToGroupPage', () => {
    let addMemberToGroupPage: AddMemberToGroupPage;
    const mockGroupService: Partial<GroupService> = {};
    const mockCommonUtilService: Partial<CommonUtilService> = {};
    const mockHeaderService: Partial<AppHeaderService> = {};
    const mockLocation: Partial<Location> = {};
    const mockPlatform: Partial<Platform> = {
        backButton: {
            subscribeWithPriority: jest.fn(() => ({data: 's-id', unsubscribe: jest.fn()})) as any,
        } as any
    };
    const mockPopoverCtrl: Partial<PopoverController> = {};
    const mockProfileService: Partial<ProfileService> = {};
    const mockRouter: Partial<Router> = {
        getCurrentNavigation: jest.fn(() => ({
            extras: {
                state: {
                    groupId: 'sample-group-id'
                }
            }
        })) as any
    };

    beforeAll(() => {
        addMemberToGroupPage = new AddMemberToGroupPage(
            mockProfileService as ProfileService,
            mockGroupService as GroupService,
            mockHeaderService as AppHeaderService,
            mockRouter as Router,
            mockLocation as Location,
            mockPlatform as Platform,
            mockCommonUtilService as CommonUtilService,
            mockPopoverCtrl as PopoverController
        );
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should create a instance of addMemberToGroupPage', () => {
        expect(addMemberToGroupPage).toBeTruthy();
    });

    describe('handleBackButton', () => {
        it('should return userIdVerified', () => {
            addMemberToGroupPage.isUserIdVerified = true;
            addMemberToGroupPage.handleBackButton(true);
            expect(addMemberToGroupPage.isUserIdVerified).toBeFalsy();
        });

        it('should back to previous page', () => {
            addMemberToGroupPage.isUserIdVerified = false;
            mockLocation.back = jest.fn();
            addMemberToGroupPage.handleBackButton(true);
            expect(addMemberToGroupPage.isUserIdVerified).toBeFalsy();
            expect(mockLocation.back).toHaveBeenCalled();
        });
    });

    it('should handle DeviceBackButton', () => {
        jest.spyOn(addMemberToGroupPage, 'handleBackButton').mockImplementation(() => {
            return;
        });
        addMemberToGroupPage.handleDeviceBackButton();
    });

    it('should handel device back button', () => {
        const data = {
            name: 'back'
        };
        jest.spyOn(addMemberToGroupPage, 'handleBackButton').mockImplementation(() => {
            return;
        });
        addMemberToGroupPage.handleHeaderEvents(data);
        expect(data.name).toBe('back');
    });

    it('should show header with back button', () => {
        mockHeaderService.showHeaderWithBackButton = jest.fn();
        mockHeaderService.headerEventEmitted$ = of({
            subscribe: jest.fn((fn) => fn({name: 'sample-event'}))
        });
        jest.spyOn(addMemberToGroupPage, 'handleHeaderEvents').mockImplementation(() => {
            return;
        });
        jest.spyOn(addMemberToGroupPage, 'handleDeviceBackButton').mockImplementation(() => {
            return;
        });
        mockCommonUtilService.getAppName = jest.fn(() => Promise.resolve('sunbird'));
        // act
        addMemberToGroupPage.ionViewWillEnter();
        // assert
        expect(mockHeaderService.showHeaderWithBackButton).toHaveBeenCalled();
        expect(mockHeaderService.headerEventEmitted$).not.toBeUndefined();
    });

    describe('onVerify', () => {
        it('should return errorMessage if userId is undefined', (done) => {
            addMemberToGroupPage.userId = undefined;
            addMemberToGroupPage.onVerify();
            setTimeout(() => {
                expect(addMemberToGroupPage.userId).toBeUndefined();
                expect(addMemberToGroupPage.showErrorMsg).toBeTruthy();
                done();
            }, 0);
        });

        it('should return userDetails for serverProfile', (done) => {
            addMemberToGroupPage.userId = 'sample-user-id';
            const dismissFn = jest.fn(() => Promise.resolve());
            const presentFn = jest.fn(() => Promise.resolve());
            mockCommonUtilService.getLoader = jest.fn(() => ({
                present: presentFn,
                dismiss: dismissFn,
            }));
            mockProfileService.getServerProfilesDetails = jest.fn(() => of({
                firstName: 'jhon',
                lastName: 'snow'
            })) as any;
            // act
            addMemberToGroupPage.onVerify();
            // assert
            setTimeout(() => {
                expect(addMemberToGroupPage.userId).not.toBeUndefined();
                expect(presentFn).toHaveBeenCalled();
                expect(dismissFn).toHaveBeenCalled();
                expect(mockProfileService.getServerProfilesDetails).toHaveBeenCalled();
                expect(addMemberToGroupPage.userDetails).toStrictEqual({
                    firstName: 'jhon',
                    lastName: 'snow'
                });
                expect(addMemberToGroupPage.userName).toBe('jhonsnow');
                expect(addMemberToGroupPage.isUserIdVerified).toBeTruthy();
                done();
            }, 0);
        });

        it('should return userDetails for firstName and lastName are undefined', (done) => {
            addMemberToGroupPage.userId = 'sample-user-id';
            const dismissFn = jest.fn(() => Promise.resolve());
            const presentFn = jest.fn(() => Promise.resolve());
            mockCommonUtilService.getLoader = jest.fn(() => ({
                present: presentFn,
                dismiss: dismissFn,
            }));
            mockProfileService.getServerProfilesDetails = jest.fn(() => of({
                firstName: undefined,
                lastName: undefined
            })) as any;
            // act
            addMemberToGroupPage.onVerify();
            // assert
            setTimeout(() => {
                expect(addMemberToGroupPage.userId).not.toBeUndefined();
                expect(presentFn).toHaveBeenCalled();
                expect(dismissFn).toHaveBeenCalled();
                expect(mockProfileService.getServerProfilesDetails).toHaveBeenCalled();
                expect(addMemberToGroupPage.userDetails).toStrictEqual({
                    firstName: undefined,
                    lastName: undefined
                });
                expect(addMemberToGroupPage.userName).toBe('');
                expect(addMemberToGroupPage.isUserIdVerified).toBeTruthy();
                done();
            }, 0);
        });

        it('should not return userDetails if serverProfile is undefined', (done) => {
            addMemberToGroupPage.userId = 'sample-user-id';
            const dismissFn = jest.fn(() => Promise.resolve());
            const presentFn = jest.fn(() => Promise.resolve());
            mockCommonUtilService.getLoader = jest.fn(() => ({
                present: presentFn,
                dismiss: dismissFn,
            }));
            mockProfileService.getServerProfilesDetails = jest.fn(() => of(undefined)) as any;
            // act
            addMemberToGroupPage.onVerify();
            // assert
            setTimeout(() => {
                expect(addMemberToGroupPage.userId).not.toBeUndefined();
                expect(presentFn).toHaveBeenCalled();
                expect(dismissFn).toHaveBeenCalled();
                expect(mockProfileService.getServerProfilesDetails).toHaveBeenCalled();
                done();
            }, 0);
        });

        it('should not return userDetails for catch part', (done) => {
            addMemberToGroupPage.userId = 'sample-user-id';
            const dismissFn = jest.fn(() => Promise.resolve());
            const presentFn = jest.fn(() => Promise.resolve());
            mockCommonUtilService.getLoader = jest.fn(() => ({
                present: presentFn,
                dismiss: dismissFn,
            }));
            mockProfileService.getServerProfilesDetails = jest.fn(() => throwError({error: 'error'})) as any;
            // act
            addMemberToGroupPage.onVerify();
            // assert
            setTimeout(() => {
                expect(addMemberToGroupPage.userId).not.toBeUndefined();
                expect(presentFn).toHaveBeenCalled();
                expect(dismissFn).toHaveBeenCalled();
                expect(mockProfileService.getServerProfilesDetails).toHaveBeenCalled();
                done();
            }, 0);
        });
    });

    it('should clear all user', () => {
        addMemberToGroupPage.onClearUser();
        expect(addMemberToGroupPage.isUserIdVerified).toBeFalsy();
        expect(addMemberToGroupPage.userId).toBe('');
    });

    describe('onAddToGroup', () => {
        it('should add member into group', (done) => {
            const dismissFn = jest.fn(() => Promise.resolve());
            const presentFn = jest.fn(() => Promise.resolve());
            mockCommonUtilService.getLoader = jest.fn(() => ({
                present: presentFn,
                dismiss: dismissFn,
            }));
            addMemberToGroupPage.userDetails = {userId: 'sample-user-id'};
          //  GroupMemberRole.MEMBER;
            mockGroupService.addMembers = jest.fn(() => of({})) as any;
            mockCommonUtilService.showToast = jest.fn();
            mockLocation.back = jest.fn();
            // act
            addMemberToGroupPage.onAddToGroup();
            // assert
            setTimeout(() => {
                expect(presentFn).toHaveBeenCalled();
                expect(addMemberToGroupPage.userDetails).not.toBeNull();
                expect(mockGroupService.addMembers).toHaveBeenCalled();
                expect(dismissFn).toHaveBeenCalled();
                expect(mockCommonUtilService.showToast).toHaveBeenCalled();
                expect(mockLocation.back).toHaveBeenCalled();
                done();
            }, 0);
        });

        it('should add member into group', (done) => {
            const dismissFn = jest.fn(() => Promise.resolve());
            const presentFn = jest.fn(() => Promise.resolve());
            mockCommonUtilService.getLoader = jest.fn(() => ({
                present: presentFn,
                dismiss: dismissFn,
            }));
            addMemberToGroupPage.userDetails = {userId: 'sample-user-id'};
            mockGroupService.addMembers = jest.fn(() => throwError({error: 'error'})) as any;
            mockCommonUtilService.showToast = jest.fn();
            // act
            addMemberToGroupPage.onAddToGroup();
            // assert
            setTimeout(() => {
                expect(presentFn).toHaveBeenCalled();
                expect(addMemberToGroupPage.userDetails).not.toBeNull();
                expect(mockGroupService.addMembers).toHaveBeenCalled();
                expect(mockCommonUtilService.showToast).toHaveBeenCalled();
                done();
            }, 0);
        });
    });

    it('should unsubscribe headerService', () => {
        addMemberToGroupPage.headerObservable = {
            unsubscribe: jest.fn()
        };
        mockPlatform.backButton = {
            unsubscribe: jest.fn()
        } as any;
        addMemberToGroupPage.ionViewWillLeave();
    });

    describe('openinfopopup', () => {
        it('should return undefined for backDrop clicked', (done) => {
            mockPopoverCtrl.create = jest.fn(() => (Promise.resolve({
                present: jest.fn(() => Promise.resolve({})),
                onDidDismiss: jest.fn(() => Promise.resolve({ data: undefined }))
            } as any)));
            addMemberToGroupPage.openinfopopup();
            setTimeout(() => {
                expect(mockPopoverCtrl.create).toHaveBeenCalled();
                done();
            }, 0);
        });

        it('should close popup for clicked on close icpn', (done) => {
            mockPopoverCtrl.create = jest.fn(() => (Promise.resolve({
                present: jest.fn(() => Promise.resolve({})),
                onDidDismiss: jest.fn(() => Promise.resolve({ data: {closeDeletePopOver: true} }))
            } as any)));
            addMemberToGroupPage.openinfopopup();
            setTimeout(() => {
                expect(mockPopoverCtrl.create).toHaveBeenCalled();
                done();
            }, 0);
        });

        it('should delete popup', (done) => {
            mockPopoverCtrl.create = jest.fn(() => (Promise.resolve({
                present: jest.fn(() => Promise.resolve({})),
                onDidDismiss: jest.fn(() => Promise.resolve({ data: {canDelete: true} }))
            } as any)));
            addMemberToGroupPage.openinfopopup();
            setTimeout(() => {
                expect(mockPopoverCtrl.create).toHaveBeenCalled();
                done();
            }, 0);
        });

        it('should not delete popup', (done) => {
            mockPopoverCtrl.create = jest.fn(() => (Promise.resolve({
                present: jest.fn(() => Promise.resolve({})),
                onDidDismiss: jest.fn(() => Promise.resolve({ data: {canDelete: false} }))
            } as any)));
            addMemberToGroupPage.openinfopopup();
            setTimeout(() => {
                expect(mockPopoverCtrl.create).toHaveBeenCalled();
                done();
            }, 0);
        });
    });
});