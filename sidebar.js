// Side-bar expansion
// const sidebar = document.getElementById("sidebar");
// const sidebarCollapsedWidth = "5rem";
const itemCollapsedWidth = "1.2rem";
const sidebarTransitionTime = "0.5s";

// Toggle sidebar so it loads compacted
// addEventListener('load', (e) => { expandSidebar(); });

sidebar.addEventListener('transitionend', (e) => { reportTransitionTime(e); });

let transitionTimer = 0;   

function expandSidebar()
{
    listItems = sidebar.getElementsByClassName("sb-collapse");
        /* sidebar.getElementsByClassName("sidebar-content")[0]
        .getElementsByTagName("ul")[0]
        .getElementsByTagName("li"); */
    if (sidebar.style.width) // Expanding the sidebar
    {
        for(let ii = 0; ii < listItems.length; ii++)
        {
            listItems[ii].style.width = null;
			listItems[ii].style.height = null;
        }
        sidebar.style.width = null;
    }
    else    // Compressing the sidebar
    {
        for(let ii = 0; ii < listItems.length; ii++)
        {
            listItems[ii].style.width = "calc(var(--width-multiplier)*var(--font-size))";
			listItems[ii].style.height = "calc(var(--height-multiplier)*var(--font-size))";
            // listItems[ii].style.transitionDelay = sidebarTransitionTime;
        }
        sidebar.style.width = "calc(var(--width-multiplier)*var(--header-fs))";
        // sidebar.style.transitionDelay = null;
    }

    transitionTimer = new Date().getTime();

    
   // sidebar.style.transform = 'scaleX(1)';
}

function reportTransitionTime(e)
{
    if (e.target === sidebar)
    {
        transitionTimer = ((new Date().getTime()) - transitionTimer) / 1000;
        console.log(`Transition time: ${transitionTimer}s`);
    }
}