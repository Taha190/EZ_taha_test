import React from 'react';
import "./global.css";
function CommentSection() {
  return (
    
    <div class="antialiased mx-auto max-w-screen-sm">
      <h3 class="mb-4 text-lg font-semibold text-gray-900">Comments</h3>
    
      <div class="space-y-4">
    
        <div class="flex">
          <div class="flex-shrink-0 mr-3">
            <img class="mt-2 rounded-full w-8 h-8 sm:w-8 sm:h-8" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt=""/>
          </div>
          <div class="flex-1 w-64 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
            <strong>You</strong> <span class="text-xs ml-2 text-gray-400">Commented</span><span class="flex flex-row-reverse text-xs text-gray-400">Just now</span>
            <p class="text-sm">
             Internet advertising what went wrong.
            </p>
          </div>
        </div>
      </div>
      {/* <div class="vertical-separator"></div> */}
      <div class="horizontal-separator"></div>
      <div class="flex">
      <span class="inline text-xs mt-2 pr-28 text-gray-400">Comment on task</span>
      {/* <button type="submit"
            class="py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
          comment
        </button> */}
<span class="relative pl-80">
<button type="submit"
            class="py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
          comment
        </button>
</span>

      </div>

    </div>
    
  );
}

export default CommentSection;