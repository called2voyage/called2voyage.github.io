function showHideMenu()
{
    var menu = document.getElementsByClassName("menu")[0];
    if (menu.style.visibility === "visible")
    {
    menu.style.visibility = "hidden"
    }
    else
    {
    menu.style.visibility = "visible"
    }
}