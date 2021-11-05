export default function routeTo(pathName, title) {
    window.history.pushState(
        {},
        pathName,
        pathName
    );
    document.title = title;
}