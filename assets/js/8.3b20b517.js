(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{446:function(t,a,e){"use strict";e.r(a);var v=e(65),s=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"git-commit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-commit"}},[t._v("#")]),t._v(" git commit")]),t._v(" "),e("p",[t._v("轻量级提交，只会对比两次版本中的修改部分提交")]),t._v(" "),e("h2",{attrs:{id:"git-branch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-branch"}},[t._v("#")]),t._v(" git branch")]),t._v(" "),e("p",[t._v("Git 的分支也非常轻量。它们只是简单地指向某个提交纪录 —— 仅此而已。所以许多 Git 爱好者传颂：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("早建分支！多用分支！\n")])])]),e("p",[t._v("这是因为即使创建再多的分支也不会造成储存或内存上的开销，并且按逻辑分解工作到不同的分支要比维护那些特别臃肿的分支简单多了。")]),t._v(" "),e("p",[t._v("在将分支和提交记录结合起来后，我们会看到两者如何协作。现在只要记住使用分支其实就相当于在说：“我想基于这个提交以及它所有的父提交进行新的工作。”")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git branch bugFix\ngit checkout bugFix\nor\ngit checkout -b bugFix\n")])])]),e("p",[t._v("如果你想创建一个新的分支同时切换到新创建的分支的话，可以通过 "),e("code",[t._v("git checkout -b <your-branch-name>")]),t._v(" 来实现。")]),t._v(" "),e("h2",{attrs:{id:"git-merge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-merge"}},[t._v("#")]),t._v(" git merge")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://lsky-1305772907.cos.ap-nanjing.myqcloud.com/2022/07/01/20414cd4c7530.png",alt:"image-20220701234804203"}})]),t._v(" "),e("p",[t._v("用 "),e("code",[t._v("git checkout <your-branch-name>")]),t._v("  切换至某个分支，")]),t._v(" "),e("p",[t._v("然后"),e("code",[t._v("git merge bugFix")]),t._v("来继承bugFix，继承后main与bugFix默认在同一节点中")]),t._v(" "),e("h2",{attrs:{id:"git-rebase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase"}},[t._v("#")]),t._v(" git rebase")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://lsky-1305772907.cos.ap-nanjing.myqcloud.com/2022/07/01/a823a94eb14ba.png",alt:"image-20220701235849187"}})]),t._v(" "),e("p",[t._v("还是准备了两个分支；注意当前所在的分支是 bugFix（星号标识的是当前分支）")]),t._v(" "),e("p",[t._v("我们想要把 bugFix 分支里的工作直接移到 main 分支上。移动以后会使得两个分支的功能看起来像是按顺序开发，但实际上它们是并行开发的。")]),t._v(" "),e("p",[t._v("咱们这次用 "),e("code",[t._v("git rebase")]),t._v(" 实现此目标")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://lsky-1305772907.cos.ap-nanjing.myqcloud.com/2022/07/01/365a608cb2f73.png",alt:"image-20220701235927121"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://lsky-1305772907.cos.ap-nanjing.myqcloud.com/2022/07/01/9348869ba1eaa.png",alt:"image-20220702000050404"}})]),t._v(" "),e("h2",{attrs:{id:"head"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[t._v("#")]),t._v(" head")]),t._v(" "),e("p",[t._v("HEAD 是一个对当前检出记录的符号引用 —— 也就是指向你正在其基础上进行工作的提交记录。")]),t._v(" "),e("p",[t._v("HEAD 总是指向当前分支上最近一次提交记录。大多数修改提交树的 Git 命令都是从改变 HEAD 的指向开始的。")]),t._v(" "),e("p",[t._v("HEAD 通常情况下是指向分支名的（如 bugFix）。在你提交时，改变了 bugFix 的状态，这一变化通过 HEAD 变得可见。")]),t._v(" "),e("p",[t._v("​")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://lsky-1305772907.cos.ap-nanjing.myqcloud.com/2022/07/01/b2e0e12e08172.png",alt:"image-20220702001526517"}})]),t._v(" "),e("p",[t._v("分离的 HEAD 就是让其指向了某个具体的提交记录而不是分支名。在命令执行之前的状态如下所示：")]),t._v(" "),e("p",[t._v("HEAD -> main -> C1")]),t._v(" "),e("p",[t._v("HEAD 指向 main， main 指向 C1")]),t._v(" "),e("p",[e("code",[t._v("git checkout c1")])]),t._v(" "),e("p",[t._v("现在变成了")]),t._v(" "),e("p",[t._v("HEAD -> C1")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://lsky-1305772907.cos.ap-nanjing.myqcloud.com/2022/07/01/5be12cb5fb2ea.png",alt:"image-20220702001547946"}})]),t._v(" "),e("h2",{attrs:{id:"相对引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相对引用"}},[t._v("#")]),t._v(" 相对引用")]),t._v(" "),e("p",[t._v("通过指定提交记录哈希值的方式在 Git 中移动不太方便。在实际应用时，并没有像本程序中这么漂亮的可视化提交树供你参考，所以你就不得不用 "),e("code",[t._v("git log")]),t._v(" 来查查看提交记录的哈希值。")]),t._v(" "),e("p",[t._v("并且哈希值在真实的 Git 世界中也会更长（注：基于 SHA-1，共 40 位）。例如前一关的介绍中的提交记录的哈希值可能是 "),e("code",[t._v("fed2da64c0efc5293610bdd892f82a58e8cbc5d8")]),t._v("。舌头都快打结了吧...")]),t._v(" "),e("p",[t._v("比较令人欣慰的是，Git 对哈希的处理很智能。你只需要提供能够唯一标识提交记录的前几个字符即可。因此我可以仅输入"),e("code",[t._v("fed2")]),t._v(" 而不是上面的一长串字符。")]),t._v(" "),e("p",[t._v("正如我前面所说，通过哈希值指定提交记录很不方便，所以 Git 引入了相对引用。这个就很厉害了!")]),t._v(" "),e("p",[t._v("使用相对引用的话，你就可以从一个易于记忆的地方（比如 "),e("code",[t._v("bugFix")]),t._v(" 分支或 "),e("code",[t._v("HEAD")]),t._v("）开始计算。")]),t._v(" "),e("p",[t._v("相对引用非常给力，这里我介绍两个简单的用法：")]),t._v(" "),e("ul",[e("li",[t._v("使用 "),e("code",[t._v("^")]),t._v(" 向上移动 1 个提交记录")]),t._v(" "),e("li",[t._v("使用 "),e("code",[t._v("~<num>")]),t._v(" 向上移动多个提交记录，如 "),e("code",[t._v("~3")])])]),t._v(" "),e("h3",{attrs:{id:"强制修改分支位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强制修改分支位置"}},[t._v("#")]),t._v(" 强制修改分支位置")]),t._v(" "),e("p",[t._v("你现在是相对引用的专家了，现在用它来做点实际事情。")]),t._v(" "),e("p",[t._v("我使用相对引用最多的就是移动分支。可以直接使用 "),e("code",[t._v("-f")]),t._v(" 选项让分支指向另一个提交。例如:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git branch -f main HEAD~3\n")])])]),e("p",[t._v("上面的命令会将 main 分支强制指向 HEAD 的第 3 级父提交。")]),t._v(" "),e("h2",{attrs:{id:"撤销变更"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#撤销变更"}},[t._v("#")]),t._v(" 撤销变更")]),t._v(" "),e("p",[e("strong",[t._v("Git Reset")])]),t._v(" "),e("p",[e("code",[t._v("git reset")]),t._v(" 通过把分支记录回退几个提交记录来实现撤销改动。你可以将这想象成“改写历史”。"),e("code",[t._v("git reset")]),t._v(" 向上移动分支，原来指向的提交记录就跟从来没有提交过一样。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://lsky-1305772907.cos.ap-nanjing.myqcloud.com/2022/07/01/3c6b843c065e0.png",alt:"image-20220702005042807"}})]),t._v(" "),e("p",[t._v("虽然在你的本地分支中使用 "),e("code",[t._v("git reset")]),t._v(" 很方便，但是这种“改写历史”的方法对大家一起使用的远程分支是无效的哦！")]),t._v(" "),e("p",[e("strong",[t._v("Git Revert")])]),t._v(" "),e("p",[t._v("为了撤销更改并"),e("strong",[t._v("分享")]),t._v("给别人，我们需要使用 "),e("code",[t._v("git revert")]),t._v("。来看演示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://lsky-1305772907.cos.ap-nanjing.myqcloud.com/2022/07/01/3129adaad9684.png",alt:"image-20220702005216731"}})]),t._v(" "),e("h2",{attrs:{id:"git-cherry-pick"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-cherry-pick"}},[t._v("#")]),t._v(" Git Cherry-pick")]),t._v(" "),e("blockquote",[e("p",[t._v("“我想要把这个提交放到这里, 那个提交放到刚才那个提交的后面”, 而接下来就讲的就是它的实现方式，非常清晰、灵活，还很生动。")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git cherry-pick <提交号>...")])])]),t._v(" "),e("p",[t._v("如果你想将一些提交复制到当前所在的位置（"),e("code",[t._v("HEAD")]),t._v("）下面的话， Cherry-pick 是最直接的方式了。我个人非常喜欢 "),e("code",[t._v("cherry-pick")]),t._v("，因为它特别简单。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git cherry-pick c3 c4 c7\n")])])]),e("p",[e("img",{attrs:{src:"https://lsky-1305772907.cos.ap-nanjing.myqcloud.com/2022/07/01/270bb77edd332.png",alt:"image-20220702010521374"}})]),t._v(" "),e("h2",{attrs:{id:"交互式的-rebase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#交互式的-rebase"}},[t._v("#")]),t._v(" 交互式的 rebase")]),t._v(" "),e("p",[t._v("当你知道你所需要的提交记录（"),e("strong",[t._v("并且")]),t._v("还知道这些提交记录的哈希值）时, 用 cherry-pick 再好不过了 —— 没有比这更简单的方式了。")]),t._v(" "),e("p",[t._v("但是如果你不清楚你想要的提交记录的哈希值呢? 幸好 Git 帮你想到了这一点, 我们可以利用交互式的 rebase —— 如果你想从一系列的提交记录中找到想要的记录, 这就是最好的方法了")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git rebase -i HEAD~4\n")])])]),e("p",[e("img",{attrs:{src:"https://lsky-1305772907.cos.ap-nanjing.myqcloud.com/2022/07/01/44b7cf49375ad.png",alt:"image-20220702011245191"}})])])}),[],!1,null,null,null);a.default=s.exports}}]);