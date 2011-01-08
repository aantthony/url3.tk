#!/usr/bin/env bash
if [ "$#" -ne 1 ]
then
	message="https://github.com/aantthony/graph.tk/commit/"$(git rev-parse HEAD)
#	echo "usage: $0 message"
#	exit 1
else
	message="$1"
fi
#echo $message
#exit
if [ -e "j0cyRLVkmPlLn2DSZXa8tunik2o.txt" ]
then
	echo "Updating..."
else
	echo "WRONG DIRECTORY!!!! EXITING NOW!!!"
	exit
fi

#clean is a utility that removes all resource forks etc. (the @ in permissions)
if which clean; then clean; fi
#This script takes stuff from the graph.tk repository, and puts it into the current directory then does a commit
#ls . | grep -v "graph\.tk" | grep -v "min" | grep -v "^\." | grep -v "^update\.sh$" | grep -v "^404\.html$" | grep -v "^CNAME$" | grep -v "^README\.md$" | while read f
#do
#	rm -rf $f
#done

rm -rf ./about
if [ -d graph.tk ]
then
	echo "[OK]			Repo already there"
else
	git clone git@github.com:aantthony/graph.tk.git
	if [ -d graph.tk ]
	then
		echo "[OK]			Cloned"
	else
		echo "[FAILED]			Couldn't get into repo"
		exit
	fi
fi



cd graph.tk
git pull
make
echo "[OK]			Pulled"
cd ../

mkdir -p about
ME=$PWD
cd graph.tk/about/
cat ./_pagelist.txt | while read page
do
	php ./page_${page}.php > ../../about/${page}.html
done

cd ../../
mv ./about/$(cat ./graph.tk/about/_pagelist.txt | head -n 1).html ./about/index.html
cp ./graph.tk/manifest.manifest ./
cp -r ./graph.tk/min ./
cp -r ./graph.tk/about/res_about ./about/
cp ./graph.tk/release.html ./index.html
cp ./graph.tk/*.png ./
cp ./graph.tk/*.ico ./
cp ./graph.tk/*.gif ./
#clear up junk


find . -type f -name "*.DS_Store" | grep -v "graph\.tk\/" | xargs rm


echo "[OK]			Compiled!"

find . -type f | grep -v "^\.\/graph\.tk\/" | grep -v "\/\." | while read commitme
do
	git add "$commitme"
done

git commit -m "$message"

#lets package a chrome extension :)
rm -rf ./tmp
mkdir -p ./tmp/about
cp -R ./chrome/* ./tmp/

cp -r ./graph.tk/min ./tmp/
cp -r ./graph.tk/about/res_about ./tmp/about/
cp ./graph.tk/release.html ./tmp/index.html
cp ./graph.tk/*.png ./tmp/
cp ./graph.tk/*.ico ./tmp/
cp ./graph.tk/*.gif ./tmp/

rm -f ./tmp/apple*

mv tmp chrome.pack

cd graph.tk
./scripts/clean.sh
cd ../
if which clean; then clean; fi
