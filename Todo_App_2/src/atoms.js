import { atom, selector } from "recoil"
export const networkAtom = atom({
    key: "networkAtom",
    default: 104
});
export const jobsAtom = atom({
    key: "jobsAtom",
    default: 5
});
export const notificationAtom = atom({
    key: "notificationAtom",
    default: 12
});
export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
});

export const totalNotifictaionSelector = selector({
    key: "totalNotifictaionSelector",
    get: ({ get }) => {
        const networkcountAtom = get(networkAtom);
        const jobcountsAtom = get(jobsAtom);
        const notificationcounrAtom = get(notificationAtom);
        const messagingcountAtom = get(messagingAtom);
        return networkcountAtom+jobcountsAtom+notificationcounrAtom+messagingcountAtom
    }
    })